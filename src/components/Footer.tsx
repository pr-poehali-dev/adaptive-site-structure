
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Телефон: +7 (123) 456-78-90</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/about" className="hover:underline">О нас</Link></li>
              <li><Link to="/services" className="hover:underline">Услуги</Link></li>
              <li><Link to="/portfolio" className="hover:underline">Портфолио</Link></li>
              <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="mb-4">
              Мы предоставляем качественные услуги с 2010 года. Наша команда экспертов 
              готова помочь вам с любыми задачами.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-4 text-center">
          <p>© {currentYear} Наша Компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
