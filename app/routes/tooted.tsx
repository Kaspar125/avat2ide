import {Form, useActionData, useLoaderData} from "@remix-run/react";
import {ActionFunctionArgs, json, LoaderFunctionArgs, redirect} from "@remix-run/node";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  name: zfd.text(z.string().min(2).max(255)),
  message: zfd.text(z.string().min(2).max(4000)),
  email: zfd.text(z.string().email()),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const validation = await schema.safeParseAsync(formData);
  if (!validation.success) {
    console.error("NOK")
    return json(validation.error, {
      status: 400,
    });
    // return redirect("/tooted"); TODO: uncomment this line
  }
  return json({ success: true });
}

export default function product() {
  const data = useActionData<typeof action>();
  console.log(JSON.stringify(data));
  return (
    <div className="flex justify-center">
      <Form className="w-full max-w-md" method="post">
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" name={"name"} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name={"email"} placeholder="Enter your email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message" name={"message"}
              placeholder="Enter your message"
              className="min-h-[100px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}
