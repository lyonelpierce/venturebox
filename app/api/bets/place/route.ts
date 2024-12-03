import { getAuthCookies } from "@/lib/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { accessToken } = await getAuthCookies();

  if (!accessToken) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const { betId, bet } = body;

  const outcome = bet ? "Yes" : "No";

  try {
    const response = await fetch(
      `https://www.stadium.science/api/stadium/bets/place`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          protocolId: betId,
          outcome,
          amount: 0.1,
        }),
      }
    );
    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ message: "Hello, world!" }, { status: 200 });
}
