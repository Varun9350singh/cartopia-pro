import { Smartphone, Headphones, Watch, Laptop, Camera, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      count: 150,
      color: "text-blue-600"
    },
    {
      id: 2,
      name: "Audio",
      icon: Headphones,
      count: 89,
      color: "text-purple-600"
    },
    {
      id: 3,
      name: "Wearables",
      icon: Watch,
      count: 67,
      color: "text-green-600"
    },
    {
      id: 4,
      name: "Laptops",
      icon: Laptop,
      count: 45,
      color: "text-red-600"
    },
    {
      id: 5,
      name: "Cameras",
      icon: Camera,
      count: 34,
      color: "text-yellow-600"
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
      count: 78,
      color: "text-indigo-600"
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Find exactly what you're looking for in our organized categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="group cursor-pointer hover:shadow-medium transition-all duration-300 hover:scale-105 border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-background mb-4 group-hover:scale-110 transition-transform ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} items
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;