"use client";

import { Heart, ShoppingCart, User2 } from "lucide-react";
import { Navigation } from "../navigation";
import { Button } from "../ui/button";
import { SearchInput } from "../search-input";
import OrdonesLogo from "@/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const router = useRouter();

  return (
    <header className="grid grid-cols-10 w-full h-20 bg-card border border-b-primary/10 shrink-0">
      <div className="col-span-3 flex items-center justify-start px-24 w-full h-full">
        <Image
          src={OrdonesLogo}
          alt="logo"
          className="w-20 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="col-span-4 flex items-center justify-center">
        <Navigation />
      </div>
      <div className="col-span-3 gap-2 flex items-center justify-center px-24 w-full h-full">
        <SearchInput />
        <Button
          size="icon"
          variant="ghost"
          onClick={() => router.push("/wishlist")}
        >
          <Heart />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => router.push("/cart")}
        >
          <ShoppingCart />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => router.push("/login")}
        >
          <User2 />
        </Button>
      </div>
    </header>
  );
}
