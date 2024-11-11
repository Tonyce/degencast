import { cn } from "@/lib/utils";
import { MemeData } from "@/services/meme/types";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { shortPubKey } from "@/lib/shortAddress";

export default function MemeCard({
  meme,
  className,
}: {
  meme: MemeData;
  className?: string;
}) {
  return (
    <Link className={cn(className)} href={`/memes/${meme.address}`}>
      <Card className="w-full h-full overflow-hidden">
        <CardContent className="w-full h-full overflow-hidden flex flex-col gap-3 p-3">
          {meme?.createdBy?.walletAddress && (
            <Link
              className="absolute top-3 left-3"
              href={`/u/${meme.createdBy.walletAddress}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Badge variant={"secondary"}>
                {shortPubKey(meme.createdBy.walletAddress)}
              </Badge>
            </Link>
          )}

          <div className="w-full aspect-square">
            <Avatar className="w-full h-full object-cover rounded-lg">
              <AvatarImage src={meme.image} />
              <AvatarFallback className="w-full h-full object-cover rounded-lg">
                Image failed
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <span className="text-primary text-2xl font-bold line-clamp-1">
              {meme.name}
            </span>
            <span className="text-secondary">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2,
                minimumFractionDigits: 0,
                notation: "compact",
              }).format(meme.stats.marketCap)}{" "}
              (
              {new Intl.NumberFormat("en-US", {
                notation: "compact",
              }).format(meme.stats.buyersNumber)}{" "}
              bought)
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
