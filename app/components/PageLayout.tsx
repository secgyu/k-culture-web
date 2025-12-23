interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div
        className={`relative w-full max-w-lg bg-white min-h-screen flex flex-col border-x border-gray-200 overflow-hidden ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
