"use client";

import Link from "next/link";

export function CategoryBar() {
  const categories = [
    { href: "/novidades", label: "Novidades" },
    { href: "/feminino", label: "Feminino" },
    { href: "/masculino", label: "Masculino" },
    { href: "/criancas", label: "Crianças" },
    { href: "/esportivo", label: "Esportivo" },
    { href: "/casual", label: "Casual" },
    { href: "/social", label: "Social" },
  ];

  return (
    <div className="border-b border-line/30 py-4">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto pb-2 -ml-4">
          <div className="flex gap-8 min-w-max">
            {categories.map((category, index) => (
              <Link 
                key={index}
                className="text-ink/70 font-medium px-4 py-2 hover:text-primary transition-colors whitespace-nowrap"
                href={category.href}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}