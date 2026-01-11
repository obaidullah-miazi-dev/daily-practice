"use server";
import { dbConnect } from "@/app/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const existUser = await dbConnect("users").findOne({ email: payload.email });
  if (existUser) {
    return {
      success: false,
      message: "user already exist",
    };
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = {
    ...payload,
    createdAt: new Date(),
    password: hashedPassword,
    role: "user",
  };

  //   console.log(newUser)
  const result = await dbConnect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      message: `user created successfully and the id is ${result.insertedId}`,
    };
  }
};
