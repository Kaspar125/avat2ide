import { Form, useActionData } from "@remix-run/react";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { toast } from "sonner";
import { SendNotification } from "@/lib/mail.server";
import ErrorMessage from "@/components/errormsg";
import { db } from "@/lib/db.server";
import { ZodError } from "zod";
import getErrorsForField, { FormInpuError } from "@/lib/FormInpuError";
import { OrderItemTable } from "@/components/ordertable";

const schema = zfd.formData({
  name: zfd.text(z.string().min(2).max(255)),
  message: zfd.text(z.string().min(2).max(4000)),
  email: zfd.text(z.string().email()),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const validation = await schema.safeParseAsync(formData);
  if (!validation.success) {
    toast("Kontaktivorm saatmine ebaõnnestus! Palun proovi uuesti.");
    return json(validation.error, {
      status: 400,
    });
    // return redirect("/tooted"); TODO: uncomment this line
  }

  try {
    await db.contact.create({
      data: {
        name: validation.data.name,
        email: validation.data.email,
        message: validation.data.message,
      },
    });
  } catch (error) {
    console.error("Error creating contact:", error);
  }

  await SendNotification(
    validation.data.email,
    validation.data.name,
    validation.data.message
  );
  toast("Kontaktivorm saadetud! Vastame peatselt.");
  return json({});
}

export default function orderForm() {
  const data = useActionData<typeof action>();

  const nameErrors = getErrorsForField(
    "name",
    data as FormInpuError | undefined
  );
  const emailErrors = getErrorsForField(
    "email",
    data as FormInpuError | undefined
  );
  const messageErrors = getErrorsForField(
    "message",
    data as FormInpuError | undefined
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto py-12 px-4 md:px-6 ">
      <div className="w-[450px] ">
        <Form className="w-full max-w-md" method="post">
          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Nimi</Label>
              <Input id="name" placeholder="Sisesta nimi" name={"name"} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name={"email"}
                placeholder="Sisesta email"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tel">Telefoninumber</Label>
              <Input
                id="tel"
                placeholder="Sisesta telefoninumber"
                name={"tel"}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Asukoht</Label>
              <Input id="place" placeholder="Saaremaa" name={"name"} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Aadress</Label>
              <Input id="name" placeholder="Aadress" name={"name"} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Sõnum</Label>
              <Textarea
                id="message"
                name={"message"}
                placeholder="Sisesta sõnum"
                className="min-h-[100px]"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button type="submit">Esita</Button>
          </div>
        </Form>
      </div>
      <OrderItemTable />
    </div>
  );
}
