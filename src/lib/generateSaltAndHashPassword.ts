import bcryptjs from "bcryptjs";
export function generateSaltAndHashPassword(password: string): {
  salt: string;
  hash: string;
} {
  const salt = bcryptjs.genSaltSync(32);
  const hash = bcryptjs.hashSync(password, salt);
  return { salt, hash };
}

// validatePassword
export function validatePassword(
  password: string,
  salt: string,
  hash: string
): boolean {
  return bcryptjs.compareSync(password, hash);
}
