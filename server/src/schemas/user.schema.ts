import { object, string, TypeOf } from "zod";
export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password must be at least 6 characters"),
    passwordConfirmation: string({
      required_error: "Password confirmation is required",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Email must be valid"),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords must match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = TypeOf<
  Omit<typeof createUserSchema, "body.passwordConfirmation">
>;

export const authUserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Email must be valid"),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password must be at least 6 characters"),
  }),
});

export type AuthUserInput = TypeOf<typeof authUserSchema>;
