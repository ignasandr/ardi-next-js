import { buildConfig } from "payload/config";
import path from "path";
import dotenv from "dotenv";
import Users from "./collections/Users";
import Images from "./collections/Images";
import Menu from "./globals/Menu";


dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    css: path.resolve(__dirname, "./css/cms.css"),
  },
  collections: [Images, Users],
  globals: [Menu],
});
