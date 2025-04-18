
import React from "react";
import ContentSection from "../components/ContentSection";

const ServicesPage = () => {
  const servicesContentRows = [
    {
      blocks: [
        {
          title: "Консалтинг",
          description: "Профессиональные консультации по развитию и оптимизации вашего бизнеса",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Разработка ПО",
          description: "Создание индивидуальных программных решений для вашей компании",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Дизайн",
          description: "Создание современного и функционального дизайна для ваших проектов",
          size: "medium",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Маркетинг",
          description: "Комплексные маркетинговые стратегии для продвижения вашего бизнеса",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Аналитика",
          description: "Сбор и анализ данных для принятия эффективных бизнес-решений",
          size: "large",
          imageUrl: "/placeholder.svg"
        }
      ]
    },
    {
      blocks: [
        {
          title: "Поддержка",
          description: "Техническая поддержка и сопровождение ваших проектов",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Обучение",
          description: "Программы обучения и повышения квалификации для ваших сотрудников",
          size: "medium",
          imageUrl: "/placeholder.svg"
        },
        {
          title: "Аудит",
          description: "Проверка и оценка эффективности ваших бизнес-процессов",
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
          <h1 className="text-3xl font-bold mb-2">Наши услуги</h1>
          <p className="text-muted-foreground mb-8">
            Широкий спектр услуг для решения ваших бизнес-задач
          </p>
        </div>
      </div>
      
      <ContentSection title="Что мы предлагаем" rows={servicesContentRows} />
    </div>
  );
};

export default ServicesPage;
