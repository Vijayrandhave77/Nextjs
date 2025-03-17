import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1>Students Lists</h1>

      <ul>
        <li>
          <Link href="/studentlist/1">one</Link>
        </li>
        <li>
          <Link href="/studentlist/2">two</Link>
        </li>
        <li>
          <Link href="/studentlist/3">three</Link>
        </li>
        <li>
          <Link href="/studentlist/4">four</Link>
        </li>
        <li>
          <Link href="/studentlist/5">five</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
