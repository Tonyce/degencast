"use client";

import { ReactNode, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useSearchTerms from "@/hooks/app/useSearchTerms";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import AudioBtns from "./AudioBtns";

export function DefaultHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { setSearchTerms } = useSearchTerms();
  useEffect(() => {
    setSearchTerms("");
  }, [pathname]);
  return (
    <>
      {" "}
      <header className="w-screen h-[80px]  fixed top-0 left-0 bg-primary z-10 max-sm:h-[70px]">
        <div className="w-full max-w-screen-2xl mx-auto h-full flex shrink-0 items-center px-6 gap-2 box-border max-sm:px-3">
          {isHomePage ? (
            <div className="h-12 justify-start items-center gap-4 inline-flex hover:no-underline">
              {/* <img src="/images/logo.png" className="size-12 max-sm:size-10" /> */}
              <div className="size-12 max-sm:size-10 relative">
                <Image src="/landing-page/images/logo.png" alt="logo" fill />
              </div>

              <div className="text-primary-foreground text-4xl font-bold max-sm:text-2xl">
                degencast.ai✨
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center gap-4">
              <Link href="/">
                <Button className="size-14 rounded-xl bg-primary-foreground hover:bg-primary-foreground max-sm:size-11 p-0">
                  <ChevronLeft className="stroke-primary hover:stroke-primary  !size-8" />
                </Button>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-4 z-20 ml-auto max-sm:gap-2">
            {isHomePage && (
              <>
                <Link href="#rules">
                  <Button className="h-[52px] rounded-full bg-primary-foreground hover:bg-primary-foreground text-primary text-2xl font-bold px-6">
                    Rules
                  </Button>
                </Link>
                <Link href="#tokenomics">
                  <Button className="h-[52px] rounded-full bg-primary-foreground hover:bg-primary-foreground text-primary text-2xl font-bold px-6">
                    Tokenomics
                  </Button>
                </Link>

                <Link href="#roadmap">
                  <Button className="h-[52px] rounded-full bg-primary-foreground hover:bg-primary-foreground text-primary text-2xl font-bold px-6">
                    Roadmap
                  </Button>
                </Link>
                <Link href="/buy">
                  <Button className="h-[52px] rounded-full bg-primary-foreground hover:bg-primary-foreground text-primary text-2xl font-bold px-6">
                    <div>Buy $CAST</div>
                  </Button>
                </Link>
                <AudioBtns />
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export function DefaultMain({ children }: { children: ReactNode }) {
  return (
    <main
      className={cn(
        "w-screen  max-w-screen-2xl mx-auto box-border overflow-hidden mt-[80px] max-sm:mt-[70px] p-6 max-sm:p-3 relative",
        "min-h-[calc(100vh-80px)] max-sm:min-h-[calc(100vh-70px)]"
      )}
    >
      {children}
    </main>
  );
}
