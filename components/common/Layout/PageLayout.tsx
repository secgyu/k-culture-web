import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return <div className={`bg-luxury-black flex min-h-screen flex-col ${className}`}>{children}</div>;
}
