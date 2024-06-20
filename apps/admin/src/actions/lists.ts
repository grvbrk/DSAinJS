import { ListType } from "@repo/common/types";
import { pool } from "@repo/db";
import { connectDB } from "@repo/db/connection";
import { QueryResult } from "pg";
import { cache } from "react";

export const getAllLists = cache(async () => {
  connectDB();
  try {
    const listsData = (await pool.query(
      `
        SELECT * FROM lists
      `
    )) as QueryResult<ListType>;

    return listsData?.rows;
  } catch (error) {
    console.log("ERROR FETCHING ALL LISTS");
  }
});
