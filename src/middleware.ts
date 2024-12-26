import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const publicRoutes = ["/login", "/register"];
  const { pathname } = request.nextUrl;

  const authToken = request.cookies.get("authToken")?.value;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (!authToken) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};