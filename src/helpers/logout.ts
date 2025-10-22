
export async function logoutUser() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
      method: "POST", // or GET depending on your backend setup
      credentials: "include", // very important for cookies
    });
    console.log(res)

    if (!res.ok) {
      throw new Error("Logout failed");
    }

    return await res.json();
  } catch (err) {
    console.error("Logout error:", err);
    return null;
  }
}
