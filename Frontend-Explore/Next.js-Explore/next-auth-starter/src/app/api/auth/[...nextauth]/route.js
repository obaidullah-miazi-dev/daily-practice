import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const userList = [
    {name:"obaidullah",password:"1234"},
    {name:"miazi",password:"12345"},
    {name:"sana",password:"123456"}
]
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const {username,password} = credentials

        const user = userList.find(u=> u.name == username)

        if(!user) return null;

        const isPasswordOk = user.password == password
        if(isPasswordOk){
            return user;
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
