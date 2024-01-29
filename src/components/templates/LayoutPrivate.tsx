import { ReactNode } from "react";

import { Navigation } from "@/components/molecules/Navigation";

type Props = {
  children: ReactNode;
};

export const LayoutPrivate = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
