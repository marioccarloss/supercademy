import { ReactNode } from "react";
import { Header } from "@/components/molecules/Header";
import { Footer } from "@/components/molecules/Footer";

type Props = {
  children: ReactNode;
};

export const LayoutPublic = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
