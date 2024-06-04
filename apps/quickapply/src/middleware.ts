import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";
import TokenVefify from "./lib/middlewares/token";
import { CustomJwtPayload } from "./app/api/v1/user/logout/route";
import { whitelist } from "./constants/publicRoutes";
export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");
  const refershToken = req.cookies.get("refershToken");
  const decode = TokenVefify(accessToken, refershToken);
  console.log(decode);
  console.log(req.nextUrl);
  if (whitelist.includes(req.nextUrl.pathname) && decode.status) {
    if (decode.accessToken) {
      return NextResponse.redirect(
        new URL(`/j/dashboard/${decode.accessToken?.id}`, req.url)
      );
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
