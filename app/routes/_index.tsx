import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/aceterntiy/flip-words";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ test: "index page" });
}

export default function Index() {
  const { test } = useLoaderData<typeof loader>();
  const words = ["kvaliteetseid", "vastupidavaid", "kauakestvaid"];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <img
          src="/random.png"
          width={650}
          height={500}
          alt="Collaboration"
          className="mx-auto aspect-[13/10] overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Avatäide pakub
              <FlipWords words={words} />
              <br />
              akna/ukse lahendusi
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Millised iganes akendega seotud vajadused teil on - meie aknafirma
              pakub kvaliteetseid lahendusi. Meie professionaalne meeskond tagab
              personaalse teeninduse alates esimesest päringust kuni
              paigalduseni. Tuginedes aastatepikkusele kogemusele ja tipptasemel
              tehnoloogiale, pakume vastupidavaid ja stiilseid aknaid, mis
              muudavad teie kodu või ärihoone paremaks ja kaunimaks.
            </p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md  text-sm font-medium "
            to="/firmast"
          >
            <Button size={"lg"}>Meist lähemalt</Button>
          </Link>
        </div>
      </div>
      <div className="container grid gap-8 px-4 md:px-6 py-12">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            5 Sammu reegel
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Kuidas kiirelt ja mugavalt 5 sammuga aknaid tellida
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 py-8">
          <div className="grid gap-4 items-start">
            <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
              1
            </div>
            <div>
              <h3 className="font-semibold">Tutvu tingimustega</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Loe läbi meie tingimused ja tutvu meie toodega.
              </p>
            </div>
          </div>
          <div className="grid gap-4 items-start">
            <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h3 className="font-semibold">Edasta päring</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Täida veebivorm oma soovidega ja edasta see meile.
              </p>
            </div>
          </div>
          <div className="grid gap-4 items-start">
            <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h3 className="font-semibold">Saadame hinnapakkumise</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Koostame sulle personaalse hinnapakkumise.
              </p>
            </div>
          </div>
          <div className="grid gap-4 items-start">
            <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h3 className="font-semibold">Kinnita pakkumine</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Vaata pakkumine läbi ja kinnita see, kui kõik sobib.
              </p>
            </div>
          </div>
          <div className="grid gap-4 items-start">
            <div className="bg-gray-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium">
              5
            </div>
            <div>
              <h3 className="font-semibold">Sõlmi leping</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Allkirjasta leping ja alustame tellimuse töötlemist.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md  text-sm font-medium "
          to="/hinnaparing"
        >
          <Button size={"lg"}>Tellima</Button>
        </Link>
      </div>
    </section>
  );
}
