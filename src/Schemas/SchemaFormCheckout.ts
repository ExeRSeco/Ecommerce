import { z } from "zod";

export const schemaFormCheckout = z.object({
    name: z.string().min(5, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone is required" }),
    address: z.string().min(5, { message: "Address is required" }),
    city: z.string().min(3, { message: "City is required" }),
    state: z.string().min(5, { message: "State is required" }).max(10, { message: "State must be 2 characters long" }),
    zip: z.string().min(4, { message: "Zip is required" }).max(4, { message: "Zip must be 4 digits long" }),
}).refine((data) => data.name.length > 5, {
    path: ["name"],
    message: "Name must be at least 5 characters long", 
  }).refine((data) => data.phone.length === 10, {
    path: ["phone"],
    message: "Phone must be 10 digits long",
  }).refine((data) => data.address.length > 5, {
    path: ["address"],
    message: "Address must be at least 5 characters long",
  }).refine((data) => data.city.length > 5, {
    path: ["city"],
    message: "City must be at least 5 characters long",
  }).refine((data) => data.state.length >= 5 && data.state.length <= 10, {
    path: ["state"],
    message: "State must be 5 to 10 characters long",
  }).refine((data) => data.zip.length === 4, {  
    path: ["zip"],
    message: "Zip must be 4 digits long",
  }).refine((data) => data.email.includes("@"), {
    path: ["email"],
    message: "Email must contain @",
  })

export type SchemaFormCheckout = z.infer<typeof schemaFormCheckout>;


