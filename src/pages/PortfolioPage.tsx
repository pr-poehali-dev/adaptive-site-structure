
import React from "react";
import ContentSection from "../components/ContentSection";

const PortfolioPage = () => {
  const portfolioContentRows = [
    {
      blocks: [
        {
          title: "Проект 1",
          description: "Разработка корпоративного сайта для крупной компании в сфере финансов",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Проект 2",
          description: "Создание мобильного приложения для сети ресторанов быстрого питания",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Проект 3",
          description: "Редизайн и оптимизация интернет-магазина косметики",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Проект 4",
          description: "Разработка CRM-системы для строительной компании",
          size: "large",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Проект 5",
          description: "Создание корпоративного портала для медицинской клиники",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Проект 6",
          description: "Разработка логистической системы для транспортной компании",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Проект 7",
          description: "Создание образовательной платформы для онлайн-обучения",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Проект 8",
          description: "Разработка мобильного приложения для фитнес-клуба",
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
          <h1 className="text-3xl font-bold mb-2">Наше портфолио</h1>
          <p className="text-muted-foreground mb-8">
            Примеры проектов, которые мы успешно реализовали для наших клиентов
          </p>
        </div>
      </div>
      
      <ContentSection title="Наши работы" rows={portfolioContentRows} />
    </div>
  );
};

export default PortfolioPage;
