import { Card } from "../ui";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useLayoutEffect, useState } from "react";

const activities = [
  { id: 3, text: "Initial setup completed", time: "10m ago" },
  { id: 2, text: "Muslih joined as Owner", time: "1h ago" },
  { id: 1, text: "Project created", time: "2h ago" },
];

export function ActivitySidebar() {
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
  }, [activities.length]);

  return (
    <div className="relative max-h-[74vh]">
      <Card
        className="h-full overflow-y-auto no-scrollbar relative"
        ref={scrollRef}
      >
        <h3 className="text-sm font-semibold text-text-primary h-10 shrink-0 sticky top-0 z-10 flex items-center bg-surface border-b border-primary/30">
          Activity
        </h3>

        <ul className="space-y-3 text-sm text-text-secondary mt-4">
          {activities.map((item) => (
            <li key={item.id} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-border shrink-0" />

              <div className="flex flex-col">
                <p className="text-sm text-text-primary">{item.text}</p>
                <span className="text-xs text-text-secondary">{item.time}</span>
              </div>
            </li>
          ))}
        </ul>
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
  );
}
