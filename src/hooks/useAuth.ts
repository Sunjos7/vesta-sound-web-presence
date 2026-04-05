import { useEffect, useState } from "react";
import { blink } from "@/lib/blink";

interface AuthUser {
  id: string;
  email: string;
  displayName?: string;
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user as AuthUser | null);
      if (!state.isLoading) setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, isLoading, isAuthenticated: !!user };
}
