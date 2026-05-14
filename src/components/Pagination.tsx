"use client";

import { useState, useEffect } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const minPage = Math.max(1, currentPage - delta);
    const maxPage = Math.min(totalPages, currentPage + delta);
    
    for (let i = minPage; i <= maxPage; i++) {
      range.push(i);
    }
    
    return range;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        className="px-4 py-2 rounded-lg bg-surface border border-line/30 text-ink disabled:opacity-50 hover:bg-primary hover:text-white transition-colors"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>
      
      <div className="flex gap-1">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-full ${
              currentPage === page 
                ? "bg-primary text-white" 
                : "bg-surface border border-line/30 text-ink hover:bg-primary hover:text-white"
            } transition-colors`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        className="px-4 py-2 rounded-lg bg-surface border border-line/30 text-ink disabled:opacity-50 hover:bg-primary hover:text-white transition-colors"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próximo
      </button>
    </div>
  );
}