export function ProductSkeleton() {
  return (
    <div className="bg-surface border border-line/30 rounded-2xl shadow-soft overflow-hidden h-full group">
      <div className="animate-pulse">
        <div className="bg-gradient-to-br from-surface via-white to-line/20 h-64 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start gap-3 mb-3">
            <div className="h-6 bg-muted/20 rounded w-3/4"></div>
            <div className="h-6 bg-muted/20 rounded w-1/4"></div>
          </div>
          <div className="h-4 bg-muted/20 rounded w-full mb-3"></div>
          <div className="h-4 bg-muted/20 rounded w-1/2"></div>
          <div className="h-8 bg-muted/20 rounded w-full mt-4"></div>
        </div>
      </div>
    </div>
  );
}