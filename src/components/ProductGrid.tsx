import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

type ProductGridProps = {
  products: Product[];
  loading?: boolean;
};

export function ProductGrid({ products, loading }: ProductGridProps) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          isInCart={isInCart(product.id)}
        />
      ))}
    </div>
  );
}
