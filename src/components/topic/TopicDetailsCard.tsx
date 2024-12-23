import { cn } from "@/lib/utils";
import { TopicData } from "@/services/topic/types";
import Link from "next/link";
import JoinTelegramButton from "../telegram/JoinTelegramButton";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function TopicDetailsCard({
  topic,
  className,
}: {
  topic: TopicData;
  className?: string;
}) {
  return (
    <Card className={cn("w-full h-full", className)}>
      <CardContent className="w-full h-full flex gap-3  max-md:flex-col">
        <img
          src={topic.image}
          className="aspect-square w-[30%] max-md:w-full rounded-2xl object-cover"
          loading="lazy"
          alt={topic.name}
        />
        <div className="flex-1 flex flex-col gap-6 max-md:w-full max-md:gap-3">
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-foreground max-md:text-xl">
              #{topic.name}
            </span>
            <Badge
              variant={"secondary"}
              className="text-2xl font-bold max-md:text-base"
            >
              {topic.stats?.memesAmount} memes
            </Badge>
          </div>
          <span className="text-2xl font-normal text-card-foreground max-md:text-base">
            {topic.description}
          </span>
          <div className="mt-auto">
            <JoinTelegramButton link={topic.tgLink} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
