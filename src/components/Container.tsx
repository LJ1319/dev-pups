type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-5xl p-4 md:p-8">{children}</div>;
}
