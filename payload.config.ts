import { buildConfig } from "payload/config";
import path from "path";
import dotenv from "dotenv";
import News from "./collections/News";
import Users from "./collections/Users";
import Images from "./collections/Images";
import Catalogs from "./collections/Catalogs";
import Menu from "./globals/Menu";
import Contacts from "./globals/Contacts";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    css: path.resolve(__dirname, "./css/cms.css"),
  },
  collections: [News, Images, Catalogs],
  globals: [Menu, Contacts],
});
