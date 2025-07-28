import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: product1,
      rating: 4.8,
      reviewCount: 124,
      isOnSale: true,
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 249.99,
      image: product2,
      rating: 4.6,
      reviewCount: 89,
      isOnSale: false,
    },
    {
      id: "3",
      name: "Ultra-Slim Laptop",
      price: 1299.99,
      originalPrice: 1499.99,
      image: product3,
      rating: 4.9,
      reviewCount: 67,
      isOnSale: true,
    },
    {
      id: "4",
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: product1,
      rating: 4.8,
      reviewCount: 124,
      isOnSale: true,
    },
  ];

  const handleAddToCart = (id: string) => {
    console.log("Adding to cart:", id);
    // This would integrate with cart state management
  };

  const handleToggleFavorite = (id: string) => {
    console.log("Toggling favorite:", id);
    // This would integrate with wishlist state management
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, carefully chosen for quality and value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            View All Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;