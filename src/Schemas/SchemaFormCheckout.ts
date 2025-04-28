import { z } from "zod";

export const schemaFormCheckout = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone is required" }),
    address: z.string().min(3, { message: "Address is required" }),
    city: z.string().min(3, { message: "City is required" }),
    state: z.string().min(2, { message: "State is required" }),
    zip: z.string().min(4, { message: "Zip is required" }),
}).refine((data) => data.name.length > 3, {
    path: ["name"],
    message: "Name must be at least 3 characters long",
  }).refine((data) => data.phone.length === 10, {
    path: ["phone"],
    message: "Phone must be 10 digits long",
  }).refine((data) => data.address.length > 3, {
    path: ["address"],
    message: "Address must be at least 3 characters long",
  }).refine((data) => data.city.length > 3, {
    path: ["city"],
    message: "City must be at least 3 characters long",
  }).refine((data) => data.state.length === 2, {
    path: ["state"],
    message: "State must be 2 characters long",
  }).refine((data) => data.zip.length === 5, {
    path: ["zip"],
    message: "Zip must be 5 digits long",
  }).refine((data) => data.email.includes("@"), {
    path: ["email"],
    message: "Email must contain @",
  })

export type SchemaFormCheckout = z.infer<typeof schemaFormCheckout>;


