import { ArrowRight, ShoppingBag, Users, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover Premium
              <span className="block text-accent-light">Products</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
              Shop the finest collection of electronics, accessories, and lifestyle products. 
              Quality guaranteed with fast, free shipping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="xl" variant="secondary" className="group">
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-white/90">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-sm">Products</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <p className="text-sm">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Truck className="h-5 w-5 mr-2" />
                  <span className="text-2xl font-bold">24h</span>
                </div>
                <p className="text-sm">Fast Delivery</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src={heroImage}
                alt="Premium products showcase"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-strong animate-bounce">
              <ShoppingBag className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-full px-4 py-2 shadow-strong">
              <span className="text-sm font-semibold">Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;