export const cookiesOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  domain: process.env.DOMAIN,
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};
