import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UI Library',
  description: 'Modern full-stack Turborepo with Next.js, Fastify, and shared UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">{children}</body>
    </html>
  );
}
