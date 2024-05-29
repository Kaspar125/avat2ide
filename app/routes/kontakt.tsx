import { useLoaderData } from "@remix-run/react";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ test: "kontakt" });
}

export default function About() {
  const { test } = useLoaderData<typeof loader>();
  return (
    <div className="border-2 border-indigo-500 flex min-h-screen place-content-center space-x-8">
      <div className="border-2 border-rose-500">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Saada meile päring</CardTitle>
            <CardDescription>Aknad on ühe päringu kaugusel</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4 ">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">nimi</Label>
                  <Input id="name" placeholder="nimi" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">email</Label>
                  <Input id="email" placeholder="email address" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tel">Telefoni number</Label>
                  <Input id="tel" placeholder="telefoni number" />
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Asukoht</Label>
                    <Select>
                      <SelectTrigger id="asukoht">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Saaremaa</SelectItem>
                        <SelectItem value="sveltekit">Tallinn</SelectItem>
                        <SelectItem value="astro">harjumaa</SelectItem>
                        <SelectItem value="nuxt">muu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="comment">Komentaar</Label>
                  <Input id="comment" placeholder="Lisada" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end ">
            {/* <Button variant="outline">katkesta</Button> */}
            <Button>Estita</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="map-section">
        <iframe
          width="600"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=700&amp;height=600&amp;hl=en&amp;q=Voolu%203,%20Kuressaare,%2093815%20Saare%20maakond+(Avat%C3%A4ide)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
}
