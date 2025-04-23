import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Phone is required" }),
    contactType: z.string().min(1, { message: "Contact type is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  }).refine((data) => data.name.length > 3, {
    path: ["name"],
    message: "Name must be at least 3 characters long",
  }).refine((data) => data.phone.length === 10, {
    path: ["phone"],
    message: "Phone must be 10 digits long",
  })
  
  export type FormData = z.infer<typeof formSchema>;