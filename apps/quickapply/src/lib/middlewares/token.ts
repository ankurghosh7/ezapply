import jwt from "jsonwebtoken";
import { CustomJwtPayload } from "@/app/api/v1/user/logout/route";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
export default function TokenVefify(
  accessToken?: RequestCookie,
  refershToken?: RequestCookie
): {
  accessToken?: CustomJwtPayload | null;
  refershToken?: any | null;
  status: boolean;
} {
  const accessTokenDecoded = jwt.decode(
    accessToken?.value!
  ) as CustomJwtPayload | null;
  const refershTokenDecoded = jwt.decode(
    refershToken?.value!
  ) as CustomJwtPayload | null;
  if (accessTokenDecoded) {
    const { exp } = accessTokenDecoded;
    if (Date.now() >= exp * 1000) {
      if (refershTokenDecoded) {
        const { exp } = refershTokenDecoded;
        if (Date.now() >= exp * 1000) {
          return {
            refershToken: null,
            status: false,
          };
        }
        return {
          refershToken: refershTokenDecoded,
          status: true,
        };
      }
      return {
        accessToken: null,
        status: false,
      };
    }
    return {
      accessToken: accessTokenDecoded,
      status: true,
    };
  }
  return {
    accessToken: null,
    status: false,
  };
}
