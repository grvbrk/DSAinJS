import { NeetcodeTopicType, TopicType } from "@repo/common/types";
import { pool } from "@repo/db";
import { connectDB } from "@repo/db/connection";
import { QueryResult } from "pg";
import { cache } from "react";

export const getAllTopics = cache(async () => {
  connectDB();
  try {
    const topicsData = (await pool.query(
      `
        SELECT * FROM topics
      `
    )) as QueryResult<TopicType>;

    return topicsData?.rows;
  } catch (error) {
    console.log("ERROR FETCHING ALL TOPICS");
  }
});

export const getNeetcodeTopics = cache(async () => {
  connectDB();
  try {
    const NeetcodeTopicsData = (await pool.query(
      `
        SELECT * FROM neetcodetopics
      `
    )) as QueryResult<NeetcodeTopicType>;

    return NeetcodeTopicsData?.rows;
  } catch (error) {
    console.log("ERROR FETCHING ALL NEETCODE TOPICS");
  }
});
