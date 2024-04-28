import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: "ZeroBruh!",
  description: "Financial dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
				<main className="w-full pt-16">{children}</main>
				  <Toaster />
      </div>
    </>
  );
}
