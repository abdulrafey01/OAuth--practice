"use client";
import { SessionProvider } from "next-auth/react";
import Component from "./Component";

export default function Home() {
  return (
    <SessionProvider>
      <Component />
    </SessionProvider>
  );
}
