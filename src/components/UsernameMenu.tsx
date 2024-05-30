import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useGetMyUser } from "@/api/MyUserApi";
import { useEffect, useState } from "react";
// import { CircleUserRound } from "lucide-react";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  const { currentUser } = useGetMyUser();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (currentUser?.name) setUserName(currentUser.name);
  }, [currentUser, userName]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center font-bold px-3 hover:text-orange-500 gap-3">
        {/* <CircleUserRound className="text-orange-500" /> */}
        {/* {user?.name} */}
        <span>{userName}</span>
        <img
          src={user?.picture}
          alt={user?.name}
          className="w-10 h-10 rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 bg-orange-500 hover:bg-orange-600 font-bold"
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
