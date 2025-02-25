import { shortPubKey } from "@/lib/shortAddress";
import { OwnedMemeData } from "@/services/user/types";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card, CardContent } from "../ui/card";
import ClaimRewordsAction from "../user/ClaimRewordsAction";
import NoData from "./NoData";

export default function OwnedMemesTable({
  data,
  showEmpty,
}: {
  data: OwnedMemeData[];
  showEmpty?: boolean;
}) {
  if (showEmpty) {
    return <NoData />;
  }
  return (
    <Card>
      <CardContent className="bg-primary p-2">
        <Table className=" border-separate border-spacing-y-6">
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Rewards</TableHead>
              <TableHead>Claim</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-card-foreground max-md:text-xs">
            {data.map((item, index) => {
              const hasReferralReward = item.referralReward;
              const rewardAmount = item?.referralReward?.amount;
              const meme = item?.meme;
              const baseToken = meme?.baseToken;
              const solToken = meme?.solToken;
              return (
                <TableRow
                  key={`${item.user.walletAddress}_${index}`}
                  className="w-full h-16 py-3 px-5 bg-primary-foreground"
                >
                  <TableCell className="rounded-l-2xl">
                    <Link
                      href={`/memes/${
                        baseToken?.tokenAddress ||
                        solToken?.tokenAddress ||
                        meme.id
                      }`}
                    >
                      <span className=" font-bold">
                        {item.meme.name} (${item.meme.symbol})
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <span className="">
                      {new Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(Number(item.memeAmount))}{" "}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="">
                      {hasReferralReward
                        ? new Intl.NumberFormat("en-US", {
                            notation: "compact",
                          }).format(Number(rewardAmount))
                        : "——"}
                    </span>
                  </TableCell>
                  <TableCell className="rounded-r-2xl">
                    {hasReferralReward ? (
                      <ClaimRewordsAction data={item} />
                    ) : (
                      <span className="text-center ">——</span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
