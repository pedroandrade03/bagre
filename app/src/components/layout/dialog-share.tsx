"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Label } from "../../../../wisskins/src/components/ui/label";
import { CreateCodeFlow } from "./create-code-flow";

export function DialogShare() {
  const [mode, setMode] = useState<"access" | "create">("access");
  const [code, setCode] = useState<string>(""); // Código de indicação criado
  const [earningsPassword, setEarningsPassword] = useState<string>(""); // Senha para visualizar ganhos
  const [earnings, setEarnings] = useState<number>(0); // Ganhos do usuário
  const [withdrawHistory, setWithdrawHistory] = useState<
    Array<{ date: string; amount: number }>
  >([]);
  const [totalWithdrawn, setTotalWithdrawn] = useState<number>(0);

  // Estados para acessar código já existente
  const [showAccessForm, setShowAccessForm] = useState<boolean>(false);
  const [accessPhone, setAccessPhone] = useState<string>("");
  const [accessPassword, setAccessPassword] = useState<string>("");

  // Função para visualizar ganhos (usando a senha informada para acesso)
  const handleViewEarnings = () => {
    if (!code) {
      alert("Nenhum código foi criado. Por favor, crie um código primeiro.");
      return;
    }
    // Aqui a lógica de validação da senha pode ser ajustada conforme sua implementação
    if (earningsPassword !== "1234") {
      alert("Senha incorreta. Por favor, tente novamente.");
      return;
    }
    alert(`Seus ganhos: R$ ${earnings.toFixed(2)}`);
  };

  // Função para acessar código existente utilizando telefone e senha
  const handleAccessExistingCode = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/codes/access/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone_number: accessPhone.replace(/\D/g, ""),
          pin_code: accessPassword,
        }),
      });
      if (!res.ok) {
        throw new Error("Erro ao acessar o código");
      }
      const data = await res.json();
      if (data.exists) {
        setCode(data.code);
        setEarnings(data.earnings);
        setWithdrawHistory(data.withdrawHistory);
        setTotalWithdrawn(data.totalWithdrawn);
        setShowAccessForm(false);
        alert("Código acessado com sucesso!");
      } else {
        alert("Código não encontrado. Verifique seus dados.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao acessar o código.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="my-4 text-2xl md:text-3xl md:p-8 p-6">
          Painel de Indicações
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90%] rounded-lg border-[#737373] bg-[#212225]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Gerenciar Indicações
          </DialogTitle>
        </DialogHeader>

        {/* Modo Acesso */}
        {mode === "access" && (
          <div className="flex flex-col items-center gap-4">
            {code ? (
              <>
                <h2 className="text-center">Seu Código de Indicação</h2>
                <Input
                  disabled
                  id="code"
                  defaultValue={code}
                  className="w-36 text-center"
                />
                <Button className="text-xl p-2 px-4">Copiar</Button>
              </>
            ) : (
              <div className="text-center">
                <p>Você não possui um código cadastrado.</p>
                <div className="flex flex-col gap-2 mt-3">
                  <div className="w-full flex flex-col justify-center gap-2 px-10">
                    <Button
                      className="text-lg"
                      onClick={() => setMode("create")}
                    >
                      Criar Código
                    </Button>
                  </div>
                  <div className="w-full flex flex-col justify-center gap-2 px-10">
                    <p>Já possui um código?</p>
                    <Button
                      className="text-lg px-4"
                      onClick={() => setShowAccessForm((prev) => !prev)}
                    >
                      Acessar
                    </Button>
                  </div>
                </div>
                {showAccessForm && (
                  <div className="flex flex-col gap-2 mt-4">
                    <Label htmlFor="accessPhone">Telefone Cadastrado</Label>
                    <Input
                      id="accessPhone"
                      placeholder="Digite seu telefone"
                      value={accessPhone}
                      onChange={(e) => setAccessPhone(e.target.value)}
                      className="w-48 text-center"
                    />
                    <Label htmlFor="accessPassword">Senha (4 dígitos)</Label>
                    <Input
                      id="accessPassword"
                      placeholder="****"
                      type="password"
                      value={accessPassword}
                      onChange={(e) => setAccessPassword(e.target.value)}
                      className="w-32 text-center"
                    />
                    <Button
                      className="mt-2 text-lg px-4"
                      onClick={handleAccessExistingCode}
                    >
                      Visualizar Código e Recompensas
                    </Button>
                  </div>
                )}
              </div>
            )}

            {code && (
              <div className="flex flex-col items-center gap-2 mt-4">
                <Label htmlFor="earningsPassword">
                  Digite sua senha (4 dígitos) para ver ganhos
                </Label>
                <Input
                  id="earningsPassword"
                  placeholder="****"
                  value={earningsPassword}
                  className="text-center w-32"
                  onChange={(e) => setEarningsPassword(e.target.value)}
                  type="password"
                />
                <Button className="text-lg px-4" onClick={handleViewEarnings}>
                  Ver Ganhos
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Modo Criação */}
        {mode === "create" && (
          <>
            {!code ? (
              <CreateCodeFlow
                onCodeCreated={(newCode) => {
                  setCode(newCode);
                  setMode("access");
                }}
                setMode={() => setMode("access")}
              />
            ) : (
              <>
                <h2 className="text-center">Seu Código de Indicação</h2>
                <Input
                  disabled
                  id="code"
                  defaultValue={code}
                  className="w-36 text-center"
                />
                <Button className="text-xl p-2 px-4">Copiar</Button>
                <div className="flex flex-col items-center gap-2 mt-4">
                  <Label htmlFor="earningsPassword">
                    Digite sua senha (4 dígitos) para ver ganhos
                  </Label>
                  <Input
                    id="earningsPassword"
                    placeholder="****"
                    value={earningsPassword}
                    className="text-center w-32"
                    onChange={(e) => setEarningsPassword(e.target.value)}
                    type="password"
                  />
                  <Button className="text-lg px-4" onClick={handleViewEarnings}>
                    Ver Ganhos
                  </Button>
                </div>
              </>
            )}
          </>
        )}

        {/* Regras de Resgate */}
        <div className="flex flex-col items-center">
          {/* <h2 className="text-lg">Regras de Resgate</h2> */}
          <div className="w-full bg-gray-500 my-2 h-[1px] opacity-30"></div>
          {/* <p className="text-sm text-gray-400">Resgate mínimo: R$ 100.00</p> */}
          <p className="text-sm text-gray-400">
            Apenas o telefone registrado pode realizar saques.
          </p>
        </div>

        {code && (
          <>
            {/* Histórico e Total Sacado */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg">Histórico/Total Sacado</h2>
              <p className="text-sm text-gray-400">
                Total Sacado: R$ {totalWithdrawn.toFixed(2)}
              </p>
              {withdrawHistory.length > 0 ? (
                <ul className="text-sm text-gray-400">
                  {withdrawHistory.map((item, index) => (
                    <li key={index}>
                      {item.date} - R$ {item.amount.toFixed(2)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-400">Nenhum saque realizado.</p>
              )}
            </div>

            {/* Seção de Compartilhamento */}
            <div className="w-full bg-gray-500 my-2 h-[1px] opacity-30"></div>
            <h2 className="text-sm text-gray-500">Compartilhar</h2>
            <div className="flex gap-2">
              <Image
                src="/social/facebook.png"
                alt="Facebook"
                width={48}
                height={48}
              />
              <Image
                src="/social/whatsap.png"
                alt="WhatsApp"
                width={48}
                height={48}
              />
              <Image
                src="/social/reddit.png"
                alt="Reddit"
                width={48}
                height={48}
              />
              <Image src="/social/x.png" alt="X" width={48} height={48} />
              <Image
                src="/social/email.png"
                alt="Email"
                width={48}
                height={48}
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
