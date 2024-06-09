import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import { Link } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ test: "test" });
}

export default function About() {
  const { test } = useLoaderData<typeof loader>();
  return (
    <>
      <section className="w-full py-24 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Avatäide OÜ
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Tere tulemast Meie kodulehele! Oleme 13 aastat pakkunud oma
              klientidele kvaliteetseid teenuseid, mis hõlmavad akende ja uste
              müüki, paigaldust, vahetust, hooldust jne.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Lisaks kvaliteetsetele teenustele püüame hoida oma hinnad soodsad
              ja konkurentsivõimelised. Teeme tellimise ja suhtlemise
              klientidega võimalikult lihtsaks ja mugavaks läbi meie kodulehe,
              meili või helistades.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Täpsustavate küsimuste või tellimuste vormistamisel võta julgsesti
              meiega ühendust. Meie esindus asub küll Saaremaal, Kuressaares,
              kuid oleme alati valmis tulema kohapeale ja olukorraga tutvuma ka
              teistes Eesti piirkondades.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Usalda oma uued aknad ja uksed meie kogenud meeskonna kätesse –
              koos loome parema ja kaunima kodu!
            </p>
          </div>
          <div className="grid gap-6">
            <img
              src="/our_hut.png"
              width="550"
              height="310"
              alt="About Acme Inc."
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-24 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Võta meiega ühendust
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Kui on veel mõningaid küsimusi kirjutade meile
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md  text-sm font-medium "
              to="/kontakt"
            >
              <Button size={"lg"}>Kontakt</Button>
            </Link>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Firma kohta info
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium">Registrikood</h3>
                <p className="text-gray-500 dark:text-gray-400">12012882</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">KMKR nr</h3>
                <p className="text-gray-500 dark:text-gray-400">EE101409474</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Aadress</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Voolu 3, Kuressaare, 93815 Saare maakond
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Asutatud</h3>
                <p className="text-gray-500 dark:text-gray-400">28.10.2010</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
