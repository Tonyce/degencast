"use client";

import { ReactNode } from "react";
import Link from "next/link";
import MessageMarquee from "../message/MessageMarquee";
import AboutDialogButton from "../About";
import { Button } from "../ui/button";
import { ChevronLeft, Home } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { CAST_TOKEN_ADDRESS } from "@/constants";
import { toast } from "@/hooks/use-toast";
import { LaunchTokenButton } from "../memes/create/LaunchTokenButton";

export function DefaultHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();
  const showMessageMarquee = isHomePage || pathname.startsWith("/memes");
  return (
    <>
      {" "}
      <header className="w-screen h-[80px]  fixed top-0 left-0 bg-primary z-10 max-md:h-[70px]">
        <div className="w-full max-w-screen-2xl mx-auto h-full flex shrink-0 items-center px-6 gap-2 box-border max-md:px-3">
          {isHomePage ? (
            <Link
              className="h-12 justify-start items-center gap-4 inline-flex hover:no-underline"
              href="/"
            >
              {/* <img src="/images/logo.png" className="size-12 max-md:size-10" /> */}
              <div className="size-12 max-md:size-10 relative">
                <Image src="/images/logo.png" alt="logo" fill />
              </div>

              <span className="text-primary-foreground text-4xl font-bold max-md:text-2xl">
                degencast.fun✨
              </span>
            </Link>
          ) : (
            <div className="flex flex-row items-center gap-4">
              <Button
                className="size-14 rounded-xl bg-primary-foreground hover:bg-primary-foreground max-md:size-11 p-0"
                onClick={() => {
                  router.push("/");
                }}
              >
                <Home className="stroke-primary hover:stroke-primary  !size-8" />
              </Button>
              <Button
                className="size-14 rounded-xl bg-primary-foreground hover:bg-primary-foreground max-md:size-11 p-0"
                onClick={() => {
                  router.back();
                }}
              >
                <ChevronLeft className="stroke-primary hover:stroke-primary  !size-8" />
              </Button>
            </div>
          )}

          <div className="flex items-center gap-4 z-20 ml-auto max-md:gap-2">
            <Button
              className="h-[52px] rounded-full bg-primary-foreground hover:bg-primary-foreground text-primary text-2xl font-bold px-6"
              onClick={() => {
                if (!CAST_TOKEN_ADDRESS) {
                  toast({
                    description: "CAST Token Address not found",
                    duration: 5000,
                  });
                  return;
                }
                router.push(`/memes/${CAST_TOKEN_ADDRESS}`);
              }}
            >
              <span>Buy</span>
              <span>$CAST</span>
            </Button>
            <AboutDialogButton />
            <LaunchTokenButton />
            {/* <div className="max-md:hidden">
              <Share2EarnDialogButton />
            </div> */}
            <div>
              <style jsx global>{`
                [data-testid="rk-connect-button"],
                [data-testid="rk-account-button"] {
                  height: 52px !important;
                  font-size: 24px !important;
                  font-weight: 700 !important;
                  padding: 12px !important;
                  padding-left: 24px !important;
                  padding-right: 24px !important;
                }
                [data-testid="rk-connect-button"] > div,
                [data-testid="rk-account-button"] > div {
                  padding: 0px !important;
                }
              `}</style>
              <ConnectButton
                showBalance={false}
                chainStatus={"none"}
                label="Connect"
              />
            </div>
          </div>
        </div>
      </header>
      <div
        className={cn(
          "w-screen  fixed  left-0 bg-secondary z-10 h-[58px] top-[80px] max-md:h-[40px] max-md:top-[70px] border-b-4 border-primary",
          !showMessageMarquee && "hidden"
        )}
      >
        <MessageMarquee />
      </div>
    </>
  );
}

export function DefaultMain({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const showMessageMarquee = isHomePage || pathname.startsWith("/memes");
  return (
    <main
      className={cn(
        "w-screen  max-w-screen-2xl mx-auto box-border overflow-hidden mt-[80px] max-md:mt-[70px] p-6 max-md:p-3 relative",
        "min-h-[calc(100vh-80px)] max-md:min-h-[calc(100vh-70px)]",
        showMessageMarquee && "mt-[138px] max-md:mt-[110px]"
      )}
    >
      {children}
    </main>
  );
}
