import { useRouter } from "expo-router";
import React, { createContext, ReactNode, useContext, useState } from "react";

// 1. Define types
type User = {
  username: string;
  email: string;
};

type SignupData = {
  username: string;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  signup: (data: SignupData) => void;
  login: (data: LoginData) => void;
  logout: () => void;
};

// 2. Create Context with default undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Auth Provider
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const signup = ({ username, email, password }: SignupData) => {
    setUser({ username, email });
    console.log("Signed up:", { username, email, password });
  };

  const login = ({ email, password }: LoginData) => {
    setUser({ username: "DemoUser", email });
    console.log("Logged in:", { email, password });
  };

  const logout = () => {
    setUser(null);
    router.replace("/(auth)");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
