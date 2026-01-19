import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaClock } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import {
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronRightFilled,
} from "react-icons/tb";
import { NavLink } from "react-router";
import { IconButton } from "../ui/IconButton";
import { Avatar } from "../ui/Avatar";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "motion/react";
import codeflowLogoIcon from "@/assets/logos/codeflow-icon.png";
import codeflowLogo from "@/assets/logos/codeflow-sub-logo.png";

const navItems = [
  {
    to: "/app",
    icon: TbLayoutDashboardFilled,
    label: "Dashboard",
  },
  {
    to: "/activity",
    icon: FaClock,
    label: "Activity",
  },
  {
    to: "/teams",
    icon: FaUsers,
    label: "Teams",
  },
  {
    to: "/settings",
    icon: IoSettings,
    label: "Settings",
  },
];

export function Sidebar() {
  const SIDEBAR_KEY = "codeflow_sidebar_expanded";

  const [expanded, setExpanded] = useState<boolean>(() => {
    const stored = localStorage.getItem(SIDEBAR_KEY);
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, JSON.stringify(expanded));
  }, [expanded]);

  return (
    <motion.aside
      animate={{ width: expanded ? 256 : 72 }}
      transition={{ duration: 0.18, ease: "easeInOut" }}
      className={
        "flex h-screen flex-col justify-between border-r border-border bg-surface"
      }
    >
      {/* Top section */}
      <div>
        <div className="flex h-16 items-center justify-center border-b border-border">
          <AnimatePresence mode="wait">
            {expanded ? (
              <motion.img
                key={"full"}
                src={codeflowLogo}
                alt="CodeFlow"
                className="object-contain cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            ) : (
              <motion.img
                key={"icon"}
                src={codeflowLogoIcon}
                alt="CodeFlow"
                className="h-10 w-10 object-contain cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center py-2 border-b border-border">
          <IconButton
            className="opacity-70 hover:opacity-100 cursor-pointer"
            icon={
              expanded ? (
                <TbSquareRoundedChevronLeftFilled size={22} />
              ) : (
                <TbSquareRoundedChevronRightFilled size={22} />
              )
            }
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle sidebar"
          />
        </div>

        <nav className="flex-1 px-2 py-4">
          <ul className="space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink to={to} end className={"block"}>
                  {({ isActive }) => (
                    <div
                      className={cn(
                        "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                        "text-text-secondary hover:bg-border",
                        isActive && "bg-border text-text-primary",
                      )}
                    >
                      <IconButton
                        icon={<Icon size={20} />}
                        className="group-hover:text-text-primary group-hover:bg-transparent"
                        aria-label={label}
                      />
                      <AnimatePresence>
                        {expanded && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="whitespace-nowrap"
                          >
                            {label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border p-3 hover:bg-border cursor-pointer overflow-hidden">
        <div className="flex items-center justify-center">
          <Avatar name="Muslih" size="sm" />
          <AnimatePresence>
            {expanded && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="ml-3 text-sm font-medium text-text-primary"
              >
                Muslih
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  );
}
