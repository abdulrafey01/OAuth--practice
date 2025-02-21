import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "default-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "default-client-secret",
      allowDangerousEmailAccountLinking: true,
    }),
  ],
});

export { handler as GET, handler as POST };
