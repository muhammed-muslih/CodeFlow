import { IconButton } from "../ui/IconButton";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Button } from "../ui";
import { UserMenu } from "./UserMenu";
import { getGreeting } from "@/lib/getGreeting";

export function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-surface px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-sm font-medium text-text-primary font-mono">
          {getGreeting()}, <span className="font-semibold">Muslih!</span>
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <IconButton
          className="cursor-pointer"
          icon={<FaSearch size={18} />}
          aria-label="Search"
        />

        <IconButton
          className="cursor-pointer"
          notification={true}
          icon={<IoNotifications size={18} />}
          aria-label="Notifications"
        />

        <Button className="cursor-pointer"> + New Project</Button>

        <UserMenu />
      </div>
    </header>
  );
}
