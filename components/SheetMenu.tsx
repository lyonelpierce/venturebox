import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const SheetMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side={"left"}>
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle>Venture Vox</SheetTitle>
            <SheetDescription>Prediction market for startups</SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
