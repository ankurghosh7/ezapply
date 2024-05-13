import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";
import { CustomJwtPayload } from "@/app/api/v1/user/logout/route";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
export default function TokenVefify(
  accessToken: RequestCookie,
  refershToken?: RequestCookie
) {
  const accessTokenDecoded = jwt.decode(
    accessToken.value
  ) as CustomJwtPayload | null;
  if (accessTokenDecoded) {
    const { exp } = accessTokenDecoded as any;
    if (Date.now() >= exp * 1000) {
      const refershTokenDecoded = jwt.decode(
        refershToken?.value!
      ) as CustomJwtPayload | null;
      if (refershTokenDecoded) {
        const { exp } = refershTokenDecoded as any;
        if (Date.now() >= exp * 1000) {
          return {
            success: false,
          };
        }
        return {
          refershToken: refershTokenDecoded,
          success: true,
        };
      }
      return {
        success: false,
      };
    }
    return {
      accessToken: accessTokenDecoded,
      success: true,
    };
  }
  return false;
}
