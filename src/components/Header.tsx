
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* 4 блока в шапке */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-4">
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <h3 className="font-bold">Блок 1</h3>
            <p>Информация первого блока</p>
          </div>
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <h3 className="font-bold">Блок 2</h3>
            <p>Информация второго блока</p>
          </div>
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <h3 className="font-bold">Блок 3</h3>
            <p>Информация третьего блока</p>
          </div>
          <div className="bg-primary-foreground/10 p-4 rounded-lg">
            <h3 className="font-bold">Блок 4</h3>
            <p>Информация четвертого блока</p>
          </div>
        </div>
        
        {/* Меню в одну строку */}
        <nav className="py-4 border-t border-primary-foreground/20">
          <ul className="flex flex-wrap md:flex-nowrap justify-around gap-2">
            <li><Link to="/" className="hover:underline">Главная</Link></li>
            <li><Link to="/about" className="hover:underline">О нас</Link></li>
            <li><Link to="/services" className="hover:underline">Услуги</Link></li>
            <li><Link to="/portfolio" className="hover:underline">Портфолио</Link></li>
            <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
