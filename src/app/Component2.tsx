import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Component2 = (props: Props) => {
  const session = useSession();
  return (
    <div>
      <h1>session: {session.data?.user?.name}</h1>
    </div>
  );
};

export default Component2;
