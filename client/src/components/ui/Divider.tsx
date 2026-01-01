export function Divider({ label = "OR" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs text-text-secondary">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
