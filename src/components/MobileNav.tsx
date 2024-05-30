import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
import { useGetMyUser } from "@/api/MyUserApi";
import { useEffect, useState } from "react";

const MobileNav = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const { currentUser } = useGetMyUser();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (currentUser?.name) setUserName(currentUser.name);
  }, [currentUser, userName]);

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" /> {/* icon */}
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-3 hover:text-orange-500">
              <img
                src={user?.picture}
                alt={user?.name}
                className="w-10 h-10 rounded-full"
              />
              {/* {user?.name} */}
              <span>{userName}</span>
            </span>
          ) : (
            <span>Explore EatsExpress Now!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={async () => await loginWithRedirect()}
              className="flex-1 font-bold bg-orange-500 hover:bg-orange-600"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
