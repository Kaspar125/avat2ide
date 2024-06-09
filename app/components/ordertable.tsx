import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import product from "@/routes/hinnaparing";
import { Button } from "@/components/ui/button";

const items = [
  {
    product: "Üheosaline aken",
    quantity: 2,
  },
  {
    product: "Välisuks",
    quantity: 1,
  },
];

export function OrderItemTable() {
  return (
    <Table>
      <TableCaption>Hinnapäringus olevad tooded</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Toode</TableHead>
          <TableHead>kogus</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, key) => (
          <TableRow key={key}>
            <TableCell className="font-medium">{item.product}</TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell className=" flex justify-end">
              <Button className="mr-2">Muuda</Button>
              <Button variant={"destructive"}>Kustuta</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
