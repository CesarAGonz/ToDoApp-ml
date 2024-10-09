import { Request, Response } from "express";
import { db } from "../config/database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    hashedPassword,
  ]);
  res.status(201).json({ message: "User registered" });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const [users]: any = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );

  if (users.length === 0) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const user = users[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
  res.json({ token });
};
