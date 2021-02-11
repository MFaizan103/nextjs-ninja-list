import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops....</h1>
      <h2>That Page Cannot Be Found</h2>
      <p>
        Go Back to the
        <Link href="/">
          <a> Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
