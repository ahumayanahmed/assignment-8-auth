import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_AUTH;

if (!uri) {
  throw new Error("MONGODB_AUTH is missing");
}

const client = new MongoClient(uri);
const db = client.db("assignment_8db");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  },

  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db, {}),
});