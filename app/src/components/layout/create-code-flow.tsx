"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateCode } from "@/hooks/use-create-code";
import api from "@/services/api";

interface CreateCodeFlowProps {
  onCodeCreated: (code: string) => void;
  setMode: (mode: string) => void;
}

const url = "http://192.168.1.105:8000/api/codes/verify/";

const CreateCodeSchema = z
  .object({
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      .refine(
        (val) => {
          const cleaned = val.replace(/\D/g, "");
          return cleaned.length === 10 || cleaned.length === 11;
        },
        {
          message: "Telefone inválido. Insira um número com 10 ou 11 dígitos.",
        }
      ),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .regex(/^\d{4}$/, "Senha deve conter 4 dígitos."),
    confirmPassword: z.string().nonempty("Confirmação da senha é obrigatória"),
    desiredCode: z
      .string()
      .nonempty("Código desejado é obrigatório")
      .min(5, "O código deve ter no mínimo 5 caracteres")
      .max(10, "O código deve ter no máximo 10 caracteres")
      .regex(/^[a-zA-Z0-9]+$/, "Código deve ser alfanumérico"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type CreateCodeFormValues = z.infer<typeof CreateCodeSchema>;

async function verifyPhone(phone: string): Promise<boolean> {
  const cleaned = phone.replace(/\D/g, "");
  try {
    const { data } = await api.post("codes/verify/", {
      phone_number: cleaned,
    });
    // Se "exists" for true, o telefone já existe, então retorna false
    console.log("!data.exists;", !data.exists);
    return !data.exists;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function verifyDesiredCode(code: string): Promise<boolean> {
  try {
    const { data } = await api.post("codes/verify/", {
      chosen_code: code,
    });
    // Se "exists" for true, o código já existe, então retorna false
    return !data.exists;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export function CreateCodeFlow({
  onCodeCreated,
  setMode,
}: CreateCodeFlowProps) {
  const { createCode } = useCreateCode();

  const form = useForm<CreateCodeFormValues>({
    resolver: zodResolver(CreateCodeSchema),
    defaultValues: {
      phone: "",
      password: "",
      confirmPassword: "",
      desiredCode: "",
    },
  });

  const onSubmit = async (data: CreateCodeFormValues) => {
    // Validação final via API para telefone e código
    const isPhoneValid = await verifyPhone(data.phone);
    if (!isPhoneValid) {
      form.setError("phone", { message: "Telefone já cadastrado." });
      return;
    }

    const isCodeValid = await verifyDesiredCode(data.desiredCode);
    if (!isCodeValid) {
      form.setError("desiredCode", { message: "Código já existe." });
      return;
    }

    // Criação do payload
    const payload = {
      chosen_code: data.desiredCode,
      phone_number: data.phone,
      pin_code: data.password,
    };

    const result = await createCode(payload);
    if (result) {
      alert("Código criado com sucesso!");
      onCodeCreated(data.desiredCode);
      form.reset();
    } else {
      alert("Erro ao criar o código");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu telefone"
                  className="border-primary"
                  {...field}
                  onBlur={async (e) => {
                    field.onBlur();
                    const valid = await verifyPhone(e.target.value);
                    console.log("valid", valid);
                    if (valid) {
                      form.clearErrors("phone"); // Remove o erro se o telefone estiver válido
                    } else {
                      form.setError("phone", {
                        message: "Telefone já cadastrado.",
                      });
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha (4 dígitos)</FormLabel>
              <FormControl>
                <Input
                  className="border-primary"
                  placeholder="****"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirme sua Senha</FormLabel>
              <FormControl>
                <Input
                  className="border-primary"
                  placeholder="****"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="desiredCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Código Desejado</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o código desejado"
                  className="border-primary"
                  {...field}
                  onBlur={async (e) => {
                    field.onBlur();
                    const valid = await verifyDesiredCode(e.target.value);
                    if (valid) {
                      form.clearErrors("desiredCode"); // Remove o erro se o telefone estiver válido
                    } else {
                      form.setError("desiredCode", {
                        message: "Código já existe.",
                      });
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center gap-2">
          <Button className="font-semibold" onClick={() => setMode("access")}>
            Voltar
          </Button>
          <Button className="font-semibold" type="submit">
            Criar Código
          </Button>
        </div>
      </form>
    </Form>
  );
}
