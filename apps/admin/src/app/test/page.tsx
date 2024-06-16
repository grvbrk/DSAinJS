import { connectDB } from "@repo/db/connection";
import React from "react";

export default function page() {
  connectDB();
  return <div>TEST</div>;
}
