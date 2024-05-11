import bcryptjs from "bcryptjs";

export function hashPasswordFn(password: string): string {
  const salt = bcryptjs.genSaltSync(10);
  const hashPassword = bcryptjs.hashSync(password, salt);
  return hashPassword;
}

export async function comparePasswordFn(
  hashPassword: string,
  password: string
) {
  return bcryptjs.compare(hashPassword, password);
}
