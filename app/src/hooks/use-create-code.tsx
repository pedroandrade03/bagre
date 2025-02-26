import { useState } from "react";
import api from "@/services/api";
import { CodePayload } from "@/types/code-payload";

export function useCreateCode() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const createCode = async (payload: CodePayload) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.post("codes/", payload);
      return data;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createCode, loading, error };
}
