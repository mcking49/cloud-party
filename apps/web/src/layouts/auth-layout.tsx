import type { FC, PropsWithChildren } from "react";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto flex h-full items-center justify-center">
      {children}
    </div>
  );
};
