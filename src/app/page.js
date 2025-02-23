"use client";
import { redirect } from "next/navigation";

function Home() {
  redirect("/coffee");
  return (
    <div>
      <h2>Welcome to Onyx Coffee Lab!</h2>
    </div>
  );
}

export default Home;
