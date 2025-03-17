import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  //   const token = req.cookies.get("token")?.value;
        console.log("middleware executed");
  //   // If the user is not logged in, redirect to the login page
  //   if (!token && req.nextUrl.pathname.startsWith("/dashboard")) {
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }

  //   return NextResponse.next();
}

// Define the paths where the middleware should run
// export const config = {
//   matcher: ["/dashboard/:path*"], // Middleware will run on `/dashboard/*`
// };
