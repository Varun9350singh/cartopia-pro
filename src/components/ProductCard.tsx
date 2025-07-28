import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isOnSale?: boolean;
  isFavorited?: boolean;
  onAddToCart: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isOnSale = false,
  isFavorited = false,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border hover:shadow-medium transition-all duration-300 hover:scale-[1.02]">
      {/* Sale Badge */}
      {isOnSale && originalPrice && (
        <Badge className="absolute top-3 left-3 z-10 bg-sale text-sale-foreground">
          -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
        </Badge>
      )}

      {/* Favorite Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
        onClick={() => onToggleFavorite(id)}
      >
        <Heart
          className={`h-4 w-4 transition-colors ${
            isFavorited ? "fill-red-500 text-red-500" : "text-muted-foreground"
          }`}
        />
      </Button>

      <CardContent className="p-0">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center space-x-1 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({reviewCount})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-price">
              ${price.toFixed(2)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="cart"
            className="w-full"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;