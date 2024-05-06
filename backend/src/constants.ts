import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resetPasswordTemplate = fs.readFileSync(
    path.join(__dirname, "../public/reset-password.hbs"),
    "utf-8"
);

const CookieOptions = {
    httpOnly: true,
    sameSite: true
};

export { CookieOptions, resetPasswordTemplate };
