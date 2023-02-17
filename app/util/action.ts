import type { ActionArgs, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPngData, getLocalData } from "~/util";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const { action } = Object.fromEntries(await request.formData());

  if (action === "local") {
    const data = await getLocalData();
    return json(
      {
        png: Buffer.from(data).toString("base64"),
      },
      200
    );
  } else {
    try {
      const png: any = await getPngData();

      return json(
        {
          png,
        },
        200
      );
    } catch (error) {
      return json({ message: "Failed to read file", blob: null }, 500);
    }
  }
};
