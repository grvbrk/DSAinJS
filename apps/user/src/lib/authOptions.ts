import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
      return true;
    },

    // This callback will modify the session object.
    async session({ session }: any) {
      // 1. Get user from DB
      // 2. Assign the user's id to the session (SO that it is available throughout the app)
      // 3. Return session
      return session;
    },
  },
};
