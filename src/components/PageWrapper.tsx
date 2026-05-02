type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]">
      {children}
    </div>
  );
}
