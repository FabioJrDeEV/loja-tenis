import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import type { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <main className="flex-grow overflow-x-hidden">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
