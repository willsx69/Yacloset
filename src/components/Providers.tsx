"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/lib/useCart";

export function Providers({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}