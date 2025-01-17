import type {Metadata}  from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Cantão do Catete",
  description: "Restaurante e bar com uma boa comida caseira.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
