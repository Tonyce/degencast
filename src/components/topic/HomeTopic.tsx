"use client";

import { useEffect } from "react";
import Link from "next/link";
import useHotTopics from "@/hooks/topic/useHotTopics";
import Loading from "../Loading";
import { Card, CardContent } from "../ui/card";
import { TopicAndMemes, TopicAndMemesSkeleton } from "./TopicAndMemes";

export default function HomeTopic() {
  const { items, loadItems, loading } = useHotTopics();
  const topic = items[0];
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <Card className="w-full">
      <CardContent className="w-full flex-col gap-6 flex">
        <div className="w-full justify-between items-center flex">
          <div className="flex-1  flex items-center gap-6 max-sm:gap-3">
            <span className="text-3xl font-bold text-primary max-sm:text-2xl">
              🔥Hot Topic
            </span>
            <Loading className="max-sm:flex-1 max-sm:max-w-24 max-sm:h-8" />
          </div>
          <Link
            className=" text-2xl font-bold text-primary max-sm:text-base"
            href={"/topics"}
          >
            <span>View all</span>
          </Link>
        </div>

        {!topic || loading ? (
          <TopicAndMemesSkeleton />
        ) : (
          <TopicAndMemes data={topic} />
        )}
      </CardContent>
    </Card>
  );
}
