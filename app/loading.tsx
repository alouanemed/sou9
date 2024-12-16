import { Logo } from "@/components/Logo";
import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-slate-100">
      <div className="rounded-full bg-slate-300 p-2">
        <Logo />
      </div>
      <p className="text-slate-500">
        Your one-stop shop for used and good  products at great prices.
      </p>
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
};

export default loading;
