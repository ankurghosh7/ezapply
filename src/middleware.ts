import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";
import TokenVefify from "./lib/middlewares/token";
import { CustomJwtPayload } from "./app/api/v1/user/logout/route";
export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken");
  const refershToken = req.cookies.get("refershToken");
  const decoded = TokenVefify(accessToken!, refershToken);
  console.log(decoded);
  console.log(req.nextUrl);
  // const whiteList = ["/j/auth/login", "/j/auth/register"];
  // if (accessToken == undefined && whiteList.includes(req.nextUrl.pathname)) {
  //   return NextResponse.next();
  // }
  // if (accessToken && whiteList.includes(req.nextUrl.pathname)) {
  //   const decoded = TokenVefify(accessToken, refershToken);
  //   console.log(decoded);
  //   // if (decoded) {
  //   //   const { exp } = decoded as any;
  //   //   if (Date.now() >= exp * 1000) {
  //   //     const refershToken = req.cookies.get("refershToken");
  //   //     if (refershToken) {
  //   //       const decoded = jwt.decode(refershToken.value);
  //   //       if (decoded) {
  //   //         const { exp } = decoded as any;
  //   //         if (Date.now() >= exp * 1000) {
  //   //           return NextResponse.redirect(new URL("/j/auth/login", req.url));
  //   //         }
  //   //         const { data } = axios.post(
  //   //           "http://localhost:3000/api/v1/user/auth/refresh-token",
  //   //           {
  //   //             refershToken: refershToken.value,
  //   //           }
  //   //         );
  //   //         if (data) {
  //   //           return NextResponse.redirect(new URL("/j/dashboard", req.url));
  //   //         }
  //   //       }
  //   //     }
  //   //     return NextResponse.redirect(new URL("/j/auth/login", req.url));
  //   //   }
  //   //   return NextResponse.redirect(
  //   //     new URL(`/j/dashboard/${decoded.id}`, req.url)
  //   //   );
  //   // }
  //   return NextResponse.redirect(new URL("/j/auth/login", req.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
