import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProfileTypes } from "../lib/types";

export default function ProfilestypesList() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {ProfileTypes.map((product) => (
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer">
              <img
                src={product.img}
                alt={product.code}
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="bg-white p-4 dark:bg-gray-950">
                <h3 className="font-bold text-xl">{product.name}</h3>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{product.name}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <img
                src={product.img}
                alt={product.code}
                width={600}
                height={600}
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              />
              <div className="prose">{product.desc}</div>
              <div className="prose">{product.desc2}</div>
            </div>
            <DialogFooter></DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}
