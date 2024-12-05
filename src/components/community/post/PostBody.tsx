import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const PostBody: React.FC = () => {
  return (
    <div className="relative w-full mt-4 group">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={`https://blog.latium.org/wp-content/uploads/2022/09/2e948896757753.5eb58c727d672-1024x708.png`}
                  alt={`Carousel Image ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-3 transform -translate-y-1/2 p-3 bg-gray-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
          &lt;
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-3 transform -translate-y-1/2 p-3 bg-gray-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
          &gt;
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default PostBody;
