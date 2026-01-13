import { dbConnect } from "@/app/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "Enter Password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const user = await dbConnect("users").findOne({ email });
        console.log(user)
        if (!user) return null;

        const isPasswordOk = await bcrypt.compare(password, user.password);
        if (isPasswordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    return true
  },
  async redirect({ url, baseUrl }) {
    return baseUrl
  },
  async session({ session, token, user }) {
    if(session){
      session.role = token.role
    }
    return session
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    if(user){
      token.email = user.email
      token.role = user.role
    }
    return token
  }
}
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
