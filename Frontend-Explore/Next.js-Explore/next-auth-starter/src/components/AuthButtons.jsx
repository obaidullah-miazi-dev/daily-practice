'use client'
import LoginButton from "./LoginButton";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthButtons = () => {
  const session = useSession();
  return (
    <>
      {session.status == "authenticated" ? (
        <button className="btn" onClick={()=> signOut()}>Log Out</button>
      ) : (
        <>
          <div className="flex gap-5">
            <LoginButton />
            <Link href={"/register"} className="btn">
              Register
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default AuthButtons;
