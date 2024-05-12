"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src="./logo.svg" alt="logo" width={160} height={100} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"} className="block w-full rounded-lg bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto">
          Get Started
        </Link>
      )}
    </div>
  );
}

export default Header;
