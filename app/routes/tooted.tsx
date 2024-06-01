import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ test: "tootedest leht" });
}

export default function product() {
  const { test } = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Hello {test}</h1>
    </>
  );
}
