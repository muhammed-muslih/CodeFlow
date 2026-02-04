import { Card, Avatar, Button, Badge } from "../ui";
import { FaUsers } from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useLayoutEffect } from "react";

export function OverviewContent({ isOwner }: { isOwner: boolean }) {
  const collaborators: {
    id: number;
    name: string;
    email: string;
    role: "editor" | "viewer";
  }[] = [
    {
      id: 1,
      name: "David",
      email: "david@example.com",
      role: "editor",
    },
    {
      id: 2,
      name: "Emma",
      email: "emma@example.com",
      role: "viewer",
    },
  ];
  const [hasOverflow, setHasOverflow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });

  const thumbY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useLayoutEffect(() => {
    const el = scrollRef.current;

    if (!el) return;

    const checkOverflow = () => {
      setHasOverflow(el.scrollHeight > el.clientHeight);
    };

    checkOverflow();

    //  recalc on resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [collaborators.length]);

  return (
    <div className="flex flex-col gap-6">
      {/* Project Info */}
      <Card>
        <h3 className="mb-4 text-sm font-semibold">Project Info</h3>
        <div className="flex items-center gap-3 mb-4">
          <Avatar name="Muhammed Muslih" />
          <div>
            <p className="text-sm font-medium">Muhammed Muslih</p>
            <p className="text-xs text-text-secondary">muslih@example.com</p>
          </div>

          <Badge variant="owner" className="ml-auto">
            Owner
          </Badge>
        </div>

        <div className="text-sm text-text-secondary space-y-1">
          <p>Created: Jan 20, 2026</p>
          <p>Last updated: 2 hours ago</p>
        </div>
      </Card>

      {/* Collaborators */}
      <div className="relative max-h-[45.5vh]">
        <Card
          className="h-full overflow-y-auto relative no-scrollbar"
          ref={scrollRef}
        >
          <div className="flex items-center justify-between h-10 shrink-0 sticky top-0 z-10 bg-surface border-b border-primary/30 px-1">
            <h3 className="text-sm font-semibold">Collaborators</h3>
            {isOwner && (
              <button
                type="button"
                className="rounded px-2 py-0.5 text-[11px] font-medium
               text-primary hover:bg-border transition cursor-pointer"
                disabled
              >
                Invite
              </button>
            )}
          </div>

          <div>
            {collaborators.length > 0 ? (
              collaborators.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between py-3 border-b border-border last:border-none"
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={user.name} size="sm" />
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-text-secondary">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <Badge variant={user.role} className="capitalize">
                    {user.role}
                  </Badge>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <FaUsers size={14} />
                No collaborators yet
              </div>
            )}
          </div>
        </Card>

        {hasOverflow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute right-1 top-10 bottom-2 w-2 flex justify-center"
          >
            <div className="relative w-1 h-full rounded-full bg-text-secondary/20 overflow-hidden">
              <motion.div
                className="absolute bottom-0 h-full w-full shadow-sm rounded-full bg-primary/70 backdrop-blur-sm"
                style={{ scaleY: thumbY, transformOrigin: "top" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* CTA */}
      <div className="flex justify-end">
        <Button variant="primary">Open Editor →</Button>
      </div>
    </div>
  );
}
