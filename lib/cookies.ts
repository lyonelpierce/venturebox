import { cookies } from "next/headers";

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 30 * 24 * 60 * 60, // 30 days
};

export async function getAuthCookies() {
  const cookieStore = await cookies();
  return {
    accessToken: cookieStore.get("access_token")?.value,
    refreshToken: cookieStore.get("refresh_token")?.value,
    expiresIn: cookieStore.get("expires_in")?.value,
  };
}
