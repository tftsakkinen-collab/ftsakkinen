"use client";

import { use } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ShoppingBag } from "lucide-react";

export default function StorefrontSuccessPage({ params }: { params: Promise<{ accountId: string }> }) {
  const resolvedParams = use(params);
  const accountId = resolvedParams.accountId;

  return (
    <div className="min-h-screen bg-[#000a18] text-gray-200 flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-[#000d21] border border-[#00AEEF]/50 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Ostos Onnistui!</h1>
          <p className="text-xs text-gray-300">
            Maksu suoritettu onnistuneesti kauppiaalle (Connected Account: <span className="font-mono text-[#00AEEF]">{accountId}</span>).
          </p>
        </div>

        <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
          <Link
            href={`/connect-demo/storefront/${accountId}`}
            className="w-full py-3 rounded-xl bg-[#00AEEF] text-white font-bold text-xs hover:bg-[#33c2ff] transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Palaa kauppaan</span>
          </Link>
          <Link
            href={`/connect-demo?accountId=${accountId}`}
            className="w-full py-2.5 rounded-xl bg-[#000814] border border-gray-800 text-gray-400 font-medium text-xs hover:text-white transition-colors flex items-center justify-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Palaa Connect Dashboardiin</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
