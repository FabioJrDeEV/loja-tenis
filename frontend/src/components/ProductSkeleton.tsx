export function ProductSkeleton() {
  return (
    <div className="bg-white border border-line/50 rounded-3xl overflow-hidden h-full">
      <div className="animate-pulse">
        {/* Image Placeholder */}
        <div className="aspect-[4/5] bg-surface"></div>
        
        {/* Content Placeholder */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="h-2 bg-primary/10 rounded-full w-16"></div>
            <div className="h-6 bg-surface rounded-lg w-3/4"></div>
          </div>
          
          <div className="space-y-2">
            <div className="h-4 bg-surface rounded-lg w-full"></div>
            <div className="h-4 bg-surface rounded-lg w-5/6"></div>
          </div>
          
          <div className="flex justify-between items-end pt-4">
            <div className="space-y-2">
              <div className="h-2 bg-surface rounded-full w-8"></div>
              <div className="h-8 bg-surface rounded-lg w-24"></div>
            </div>
            <div className="w-11 h-11 bg-surface rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}