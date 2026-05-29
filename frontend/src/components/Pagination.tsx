"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const delta = 1;
    const range = [];
    const minPage = Math.max(1, currentPage - delta);
    const maxPage = Math.min(totalPages, currentPage + delta);
    
    for (let i = minPage; i <= maxPage; i++) {
      range.push(i);
    }
    
    return range;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-16">
      <button
        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-line/50 text-ink disabled:opacity-30 hover:border-primary hover:text-primary transition-all duration-300"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="flex gap-2">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={`w-12 h-12 rounded-2xl font-black text-sm transition-all duration-300 ${
              currentPage === page 
                ? "bg-ink text-white" 
                : "bg-white border border-line/50 text-ink hover:border-primary hover:text-primary"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-line/50 text-ink disabled:opacity-30 hover:border-primary hover:text-primary transition-all duration-300"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}