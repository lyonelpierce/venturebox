import { getAuthCookies } from "@/lib/cookies";
import { NextResponse } from "next/server";

export async function GET() {
  const { accessToken, refreshToken, expiresIn } = await getAuthCookies();

  console.log(accessToken, refreshToken, expiresIn);

  if (!accessToken || !refreshToken || !expiresIn) {
    return NextResponse.json({ isAuthenticated: false }, { status: 401 });
  }

  return NextResponse.json({ isAuthenticated: true, expiresIn });
}
