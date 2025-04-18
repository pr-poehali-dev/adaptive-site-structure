
import React from "react";
import ContentSection from "../components/ContentSection";

const AboutPage = () => {
  const aboutContentRows = [
    {
      blocks: [
        {
          title: "История компании",
          description: "История нашей компании начинается в 2010 году, когда группа единомышленников решила создать уникальный продукт",
          size: "large",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Миссия и ценности",
          description: "Наша миссия — делать мир лучше, предоставляя инновационные и качественные решения",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Руководство",
          description: "Наша команда руководителей — это профессионалы с многолетним опытом работы в индустрии",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Наши специалисты",
          description: "Талантливые сотрудники — главный актив нашей компании",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Карьера",
          description: "Присоединяйтесь к нашей команде и развивайтесь вместе с нами",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Достижения",
          description: "За годы работы мы получили множество наград и признание в отрасли",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Технологии",
          description: "Мы используем только передовые технологии и методы работы",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Социальная ответственность",
          description: "Мы заботимся об окружающей среде и участвуем в социальных проектах",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">О нас</h1>
          <p className="text-muted-foreground mb-8">
            Узнайте больше о нашей компании, команде и ценностях
          </p>
        </div>
      </div>
      
      <ContentSection title="Наша компания" rows={aboutContentRows} />
    </div>
  );
};

export default AboutPage;
