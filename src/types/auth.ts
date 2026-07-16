export type UserRole =
    | "user"
    | "admin"
    | "teacher"
    | "student";


export interface UserWithRole {
    id: string;
    name: string;
    email: string;
    image?: string | null;
    role?: UserRole;
}