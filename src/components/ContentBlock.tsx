
import React from "react";

interface ContentBlockProps {
  title: string;
  description: string;
  size?: "small" | "medium" | "large";
  imageUrl?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  description,
  size = "medium",
  imageUrl = "/placeholder.svg",
}) => {
  const sizeClasses = {
    small: "col-span-1",
    medium: "col-span-1 md:col-span-1",
    large: "col-span-1 md:col-span-2",
  };

  return (
    <div className={`${sizeClasses[size]} bg-card rounded-lg shadow-md overflow-hidden`}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ContentBlock;
