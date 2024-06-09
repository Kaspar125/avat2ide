import { Form, useActionData, useNavigation } from "@remix-run/react";
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
import { useEffect, useRef } from "react";

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

export default function product() {
  const data = useActionData<typeof action>();
  const navigation = useNavigation();
  const isBusy = navigation.state === "submitting";
  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (!isBusy) {
      formRef.current?.reset();
    }
  }, [isBusy]);

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
        <Form className="w-full max-w-md" method="post" ref={formRef}>
          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Nimi</Label>
              <Input id="name" placeholder="Siseta nimi" name={"name"} />
              <ErrorMessage error={nameErrors} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name={"email"}
                placeholder="Siseta email"
              />
              <ErrorMessage error={emailErrors} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Sõnum</Label>
              <Textarea
                id="message"
                name={"message"}
                placeholder="Siseta sõnum"
                className="min-h-[100px]"
              />
              <ErrorMessage error={messageErrors} />
            </div>
          </div>
          <div className="mt-4">
            <Button type="submit">Esita</Button>
          </div>
        </Form>
      </div>
      <div className="map-section">
        <iframe
          width="600"
          height="500"
          // frameborder="0"
          // scrolling="no"
          // marginheight="0"
          // marginwidth="0"
          src="https://maps.google.com/maps?width=700&amp;height=600&amp;hl=en&amp;q=Voolu%203,%20Kuressaare,%2093815%20Saare%20maakond+(Avat%C3%A4ide)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
