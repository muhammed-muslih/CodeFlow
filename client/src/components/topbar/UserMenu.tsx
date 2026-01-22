import { Button, Avatar } from "../ui";
import { FaChevronDown, FaUser } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { logoutApi } from "@/services/auth.api";
import { useNavigate } from "react-router";
import { useAuth } from "@/context/AuthContext";

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { clearUser } = useAuth();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logoutApi();
    clearUser();
    navigate("/auth/login", { replace: true });
  };

  return (
    <div ref={ref} className="relative">
      <Button
        onClick={() => setOpen((prev) => !prev)}
        variant="secondary"
        className="cursor-pointer group"
      >
        <Avatar name="Muslih" size="xs" />
        <FaChevronDown
          size={16}
          className={`opacity-70 transition ${
            open ? "rotate-180" : ""
          } group-hover:opacity-100`}
        />
        <span className="sr-only">Open user menu</span>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute w-40 rounded-md border border-border bg-surface shadow-soft right-0 mt-2 flex flex-col gap-1 p-1 z-50"
          >
            <Button
              variant={"secondary"}
              className="items-center px-3 py-2 cursor-pointer"
            >
              <FaUser size={16} />
              Profile
            </Button>
            <Button
              onClick={handleLogout}
              variant="secondary"
              className="items-center px-3 py-2 cursor-pointer text-error"
            >
              <ImExit size={16} />
              Logout
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
