"use client"

import { Button } from "@/components/ui/button"
import { logoutUser } from "@/helpers/logout"
import { useRouter } from "next/navigation"
import LoginForm from "@/components/modules/Auth/LoginForm"

type NavbarClientProps = {
  user?: { role?: string }
}

export default function NavbarClient({ user }: NavbarClientProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.refresh(); // re-run getUserSession in server components
  };

  return (
    <div className="flex items-center gap-2">
      {user?.role ? (
        <Button
          onClick={handleLogout}
          className="bg-green-400 hidden hover:bg-green-500 md:block"
        >
          Logout
        </Button>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
