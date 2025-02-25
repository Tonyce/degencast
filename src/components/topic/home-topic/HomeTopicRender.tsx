import Link from "next/link";
import { Card, CardContent } from "../../ui/card";
import TopicCard from "../TopicCard";
import { TopicData } from "@/services/topic/types";

export default function HomeTopicRender({ topic }: { topic: TopicData }) {
  return (
    <Card className="w-full">
      <CardContent className="w-full flex-col gap-3 flex p-3">
        <div className="w-full justify-between items-center flex">
          <div className="flex-1  flex items-center gap-6 max-md:gap-3">
            <span className="text-2xl font-bold text-primary max-md:text-2xl">
              🔥Hot Topic
            </span>
            {/* <Loading className="max-md:flex-1 max-md:max-w-24 max-md:h-8" /> */}
          </div>
          <Link
            className=" text-2xl font-bold text-primary max-md:text-base"
            href={"/topics"}
          >
            <span>View all</span>
          </Link>
        </div>

        <div className="w-full aspect-square">
          {topic && <TopicCard topic={topic} />}
        </div>
      </CardContent>
    </Card>
  );
}
