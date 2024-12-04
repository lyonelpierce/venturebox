import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const authorization_code = searchParams.get("code"); // Authorization code

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

  console.log(tokenData);

  if (!access_token || !refresh_token) {
    return NextResponse.json(
      { error: "Invalid token response" },
      { status: 400 }
    );
  }

  // Redirect to home page or success page
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = "/";
  redirectTo.searchParams.set("access_token", access_token);
  redirectTo.searchParams.set("refresh_token", refresh_token);
  redirectTo.searchParams.set("expires_in", expires_in.toString());

  return NextResponse.redirect(redirectTo);
}
