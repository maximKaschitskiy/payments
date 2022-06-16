import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      scope:
        "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: "secret token",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.tag - session.user.name.split(" ").join("").toLowerCase();
      session.user.uid = token.sub;
      return session;
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/user") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
