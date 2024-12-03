import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cookieOptions } from "@/lib/cookies";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const authorization_code = searchParams.get("code");

  const client_id = process.env.NEXT_PUBLIC_SVN_CLIENT_ID!;
  const client_secret = process.env.SVN_CLIENT_SECRET!;

  const grant_type = "authorization_code";
  if (!authorization_code) {
    return NextResponse.json(
      { error: "No authorization code provided" },
      { status: 400 }
    );
  }

  const accessToken = await fetch("https://www.svn.haus/api/auth/token", {
    method: "POST",
    body: JSON.stringify({
      authorization_code,
      client_id,
      client_secret,
      grant_type,
    }),
  });

  const tokenData = await accessToken.json();

  const { access_token, refresh_token, expires_in } = tokenData;

  // Check if running in mobile app
  const userAgent = request.headers.get("user-agent") || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);

  if (isMobile) {
    // For mobile, pass tokens in URL parameters (they will be stored by the mobile app)
    const redirectTo = request.nextUrl.clone();
    redirectTo.pathname = "/mybets";
    redirectTo.searchParams.set("access_token", access_token);
    redirectTo.searchParams.set("refresh_token", refresh_token);
    redirectTo.searchParams.set("expires_in", expires_in.toString());
    return NextResponse.redirect(redirectTo);
  } else {
    // For web, store in cookies
    const cookieStore = await cookies();
    cookieStore.set("access_token", access_token, cookieOptions);
    cookieStore.set("refresh_token", refresh_token, cookieOptions);
    cookieStore.set("expires_in", expires_in.toString(), cookieOptions);

    const redirectTo = request.nextUrl.clone();
    redirectTo.pathname = "/mybets";
    return NextResponse.redirect(redirectTo);
  }
}
