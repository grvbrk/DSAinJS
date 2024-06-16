import { addUser, findUser } from "@/actions/users";
import { UserType } from "@repo/common/types";
import { pool } from "@repo/db";
import { connectDB } from "@repo/db/connection";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID_ADMIN as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET_ADMIN as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // This callback will be invoked on successful signin by user
    async signIn({ profile }: any) {
      // 1. Connect DB
      // 2. Check if user exists
      // 2.1. If not, add user to DB
      // 3. Return 'true' to allow sign in
      const adminEmail = process.env.NEXTAUTH_ADMIN_EMAIL;
      if (adminEmail != profile.email) {
        return false;
      }

      const user = await findUser(profile.email);

      if (!user) {
        await addUser(profile.email);
      }

      return true;
    },

    // This callback will modify the session object.
    async session({ session }: any) {
      // 1. Get user from DB
      // 2. Assign the user's id to the session (So that it is available throughout the app)
      // 3. Return session
      const user = await findUser(session.user.email);
      session.user.id = user?.id;
      session.user.foo = "bar";
      return session;
    },

    // This callback will be called based on what happens in SignIn (true/false)
    async redirect({ url, baseurl }: { url: string; baseurl: string }) {
      if (url === baseurl) {
        return `http://localhost:3001/api/auth/error`;
      }
      return url;
    },
  },
};
