
import React from "react";
import ContentSection from "../components/ContentSection";

const HomePage = () => {
  const contentRows = [
    {
      blocks: [
        {
          title: "Наши услуги",
          description: "Широкий спектр услуг для решения ваших задач",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Наши проекты",
          description: "Портфолио наших успешных работ и реализаций",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Наша команда",
          description: "Профессионалы своего дела с богатым опытом",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Новости компании",
          description: "Последние новости и события из жизни компании",
          size: "large",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Отзывы клиентов",
          description: "Что говорят о нас наши клиенты",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Партнеры",
          description: "Наши надежные партнеры и сотрудничество",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Преимущества",
          description: "Почему клиенты выбирают именно нас",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Статьи и публикации",
          description: "Полезные материалы и экспертные статьи",
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
          <h1 className="text-3xl font-bold mb-2">Добро пожаловать на наш сайт</h1>
          <p className="text-muted-foreground mb-8">
            Мы предлагаем современные решения для вашего бизнеса
          </p>
        </div>
      </div>
      
      <ContentSection title="Наши основные направления" rows={contentRows} />
    </div>
  );
};

export default HomePage;
