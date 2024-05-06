import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
function generateAccessToken(user: User) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      fullName: `${user.firstName} ${user.lastName}`,
      phone: user.phone,
    },
    process.env.ACCESS_TOKEN_SECRET!,
    {
      expiresIn: "15m",
    }
  );
}

function generateRefreshToken(user: User) {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    }
  );
}

export { generateAccessToken, generateRefreshToken };
