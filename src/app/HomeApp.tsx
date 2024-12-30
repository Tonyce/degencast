"use client";

import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/Home"), {
	ssr: false,
});

export default function HomeApp() {
	return (
		<>
			<Home />
		</>
	);
}