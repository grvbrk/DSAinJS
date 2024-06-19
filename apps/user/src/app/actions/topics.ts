"use server";

import { QueryResult } from "pg";
import { pool } from "@repo/db";
import { connectDB } from "@repo/db/connection";
import { cache } from "react";
import { TopicType } from "@repo/common/types";

export const getAllTopics = cache(async () => {
  try {
    connectDB();
    const TopicData = (await pool.query(
      `
      SELECT * from topics
      `
    )) as QueryResult<TopicType>;
    return TopicData?.rows;
  } catch (error) {
    console.log("ERROR FETCHING TOPICS");
  }
});
