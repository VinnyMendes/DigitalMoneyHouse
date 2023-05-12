import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const session = await getToken({ req });

  const url = req.url;

  if (!session && url.includes("/protected")) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (session && url.includes("/protected")) {
    return NextResponse.next();
  }
}
