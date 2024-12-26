"use client"

import { logout } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Menu = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <nav className="w-full flex justify-between items-center ">
      <ul className="flex gap-8 underline">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/posts">Posts</Link>
        </li>

        <li>
          <Link href="#news-letter">Newsletter</Link>
        </li>
      </ul>

      <ul>
        <li>
          <button onClick={handleLogout}>
            <p className="flex underline">Logout</p>
          </button>
        </li>
      </ul>
    </nav>
  )
}