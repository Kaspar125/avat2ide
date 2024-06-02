import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { db } from "@/lib/db.server";
import { Form, useLoaderData } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export async function action({ request }: ActionFunctionArgs) {
  let randomId = (Math.random() + 1).toString(36).substring(7);
  let randomId2 = (Math.random() + 1).toString(36).substring(3);
  await db.issue.create({
    data: {
      title: "New Issue" + randomId2,
      draftId: randomId,
      description: "This is a new issue",
    },
  });
  return {
    success: true,
  };
}
export async function loader({ request }: LoaderFunctionArgs) {
  const issue = await db.issue.findMany();
  return json({
    issue,
  });
}
export default function Index() {
  const { issue } = useLoaderData<typeof loader>();
  return (
    <div className={"flex justify-center my-12 mx-8"}>
      <h1> Items </h1>
      <ul className={"flex mt-4"}>
        {issue.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Form method="POST" className={"mt-8"}>
        <Button type="submit" value="Submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}
