import "better-auth";

declare module "better-auth/react" {
  interface User {
    role?: "admin" | "teacher" | "student";
  }
}