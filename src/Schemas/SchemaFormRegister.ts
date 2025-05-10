import { z } from "zod";

export const schemaFormRegister = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
}).refine((data) => data.name.length > 3, {
    path: ["name"],
    message: "Name must be at least 3 characters long",
}).refine((data) => data.email.includes("@"), {
    path: ["email"],
    message: "Email must contain @",
}).refine((data) => data.password.length >= 8, {
    path: ["password"],
    message: "Password must be at least 8 characters long",
})

export type FormDataRegister = z.infer<typeof schemaFormRegister>;

