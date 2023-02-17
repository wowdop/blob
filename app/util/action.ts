import type { ActionArgs, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPngData, getLocalData } from "~/util";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const { action } = Object.fromEntries(await request.formData());

  const png = action === "local" ? await getLocalData() : await getPngData();

  return json(
    {
      png,
    },
    200
  );
};
