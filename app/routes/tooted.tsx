import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProfiletypesList from "@/components/ProductDetails";
import GlasstypesList from "@/components/GlassDetails";
import AddonTypesList from "@/components/AddonDetails";
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
import { AddonTypes } from "@/lib/types";

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ test: "tooted" });
}

export default function stuff() {
  const { test } = useLoaderData<typeof loader>();
  return (
    <div>
      <div className="flex place-content-center font-bold py-4 text-xl">
        <span>Profiilid</span>
      </div>
      <div>
        <ProfiletypesList />
      </div>
      <div className="flex place-content-center font-bold py-4 text-xl">
        <span>Klaasid</span>
      </div>
      <div>
        <GlasstypesList />
      </div>
      <div className="flex place-content-center font-bold py-4 text-xl">
        <span>Lisad</span>
      </div>
      <div>
        <AddonTypesList />
      </div>
    </div>
  );
}
