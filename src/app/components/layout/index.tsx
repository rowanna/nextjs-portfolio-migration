import { ReactNode } from "react";
import Footer from "@/app/components/layout/footer";
import Header from "@/app/components/layout/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
