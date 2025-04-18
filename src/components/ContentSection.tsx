
import React from "react";
import ContentBlock from "./ContentBlock";

interface ContentRow {
  blocks: {
    title: string;
    description: string;
    size?: "small" | "medium" | "large";
    imageUrl?: string;
  }[];
}

interface ContentSectionProps {
  title: string;
  rows: ContentRow[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, rows }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {row.blocks.map((block, blockIndex) => (
              <ContentBlock
                key={blockIndex}
                title={block.title}
                description={block.description}
                size={block.size}
                imageUrl={block.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
