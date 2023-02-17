import fs from "fs";
import path from "path";

export const getPngData = async () => {
  const url = "https://blob-wowjob.netlify.app/test.png";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch PNG file");
    }

    const arrayBuffer = await response.arrayBuffer();
    const pngData = new Uint8Array(arrayBuffer);
    const base64Data = btoa(String.fromCharCode(...pngData));
    return base64Data;
  } catch (error) {
    console.error(error);
  }
};

export const getLocalData = async () => {
  const filePath = path.join(process.cwd(), "public/test.png");
  const data = fs.readFileSync(filePath);
  return Buffer.from(data).toString("base64");
};

export { action } from "./action";
