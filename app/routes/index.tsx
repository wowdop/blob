import { useActionData } from "@remix-run/react";
export { action } from "~/util";

const BlobPage = () => {
  const { png }: any = useActionData() || {};

  return (
    <div>
      <h1>Blob</h1>

      <form method="post">
        <button name="action" value="local" type="submit">
          Load locally
        </button>

        <br />

        <button name="action" value="web" type="submit">
          Load from the web
        </button>
      </form>

      {png && (
        <div>
          <h2>Download link</h2>

          <a
            title="test png"
            href={`data:image/png;base64, ${png}`}
            download="test.png"
          >
            download png
          </a>

          <h2>Actual image</h2>
          <img alt="test png" src={`data:image/png;base64, ${png}`} />
        </div>
      )}
    </div>
  );
};

export default BlobPage;
