"use client";
import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Component2 from "./Component2";
type Props = {};

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {JSON.stringify(session)} <br />
        <Component2 />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={
          () => signIn()
          // after signin,send email to backend here to handle the user token etc
        }
      >
        Sign in
      </button>
    </>
  );
}
