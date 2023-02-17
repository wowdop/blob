import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "react-router";
import fs from "fs";
import path from "path";

export const loader: LoaderFunction = ({ request }: LoaderArgs) => {
  const filePath = path.join(process.cwd(), "public/test.png");

  try {
    const data = fs.readFileSync(filePath);
    return json(
      {
        message: "test",
        data: Buffer.from(data).toString("base64"),
      },
      200
    );
  } catch (error) {
    return json({ message: "Failed to read file", blob: null }, 500);
  }
};

const BlobPage = () => {
  const { message = "", data }: any = useLoaderData();

  return (
    <div>
      <h1>Blob</h1>
      <p>Message: {message}</p>

      <h2>Download link</h2>
      <a
        title="test png"
        href={`data:image/png;base64, ${data}`}
        download="test.png"
      >
        download png
      </a>

      <h2>Actual image</h2>
      <img alt="test png" src={`data:image/png;base64, ${data}`} />
    </div>
  );
};

export default BlobPage;
