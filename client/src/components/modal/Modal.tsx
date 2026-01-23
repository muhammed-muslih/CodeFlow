import { type ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { IconButton } from "../ui";
import { motion, AnimatePresence } from "motion/react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ children, onClose, open }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="
          relative z-10 w-full max-w-md rounded-lg
          bg-surface border border-border shadow-soft p-5 sm:m-0 m-3"
          >
            <div className="absolute right-3 top-3">
              <IconButton
                className="cursor-pointer"
                icon={<IoClose size={18} />}
                onClick={onClose}
                aria-label="Close modal"
              />
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
