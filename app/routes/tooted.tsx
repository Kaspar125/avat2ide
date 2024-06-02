import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";

// const schema = z.formData({
//   name: z.string(),
//   email: z.string().email(),
//   message: z.string(),
// });

// export const action = async ({ request }) => {
//   const { name, email } = schema.parse(
//     await request.formData()
//   );

// };

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ test: "tootedest leht" });
}

export default function product() {
  const { test } = useLoaderData<typeof loader>();
  return (
    <div className="flex justify-center">
      <form className="w-full max-w-md ">
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[100px]"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
