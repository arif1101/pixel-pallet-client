import { cookies, headers } from "next/headers";

export async function getUserSession() {
  // Synchronous cookies
  const cookieStore = cookies();
  const tokenFromCookie = (await cookieStore).get("accessToken")?.value;

  // Headers
  const authHeader = (await headers()).get("authorization");
  const token =
    tokenFromCookie ||
    (authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : undefined);

  if (!token) return null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
