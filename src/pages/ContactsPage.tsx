
import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";

const ContactsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Контакты</h1>
          <p className="text-muted-foreground mb-8">
            Связаться с нами можно любым удобным для вас способом
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Свяжитесь с нами</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Имя</label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <Input id="email" type="email" placeholder="example@mail.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-1">Телефон</label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1">Сообщение</label>
                    <Textarea id="message" placeholder="Ваше сообщение" rows={5} />
                  </div>
                  
                  <Button type="submit" className="w-full">Отправить</Button>
                </form>
              </Card>
            </div>
            
            <div>
              <Card className="p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Наши контакты</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold">Адрес:</h3>
                    <p>г. Москва, ул. Примерная, д. 123, офис 456</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Телефоны:</h3>
                    <p>+7 (123) 456-78-90 (общий)</p>
                    <p>+7 (123) 456-78-91 (отдел продаж)</p>
                    <p>+7 (123) 456-78-92 (техподдержка)</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Email:</h3>
                    <p>info@example.com</p>
                    <p>sales@example.com</p>
                    <p>support@example.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold">Режим работы:</h3>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб-Вс: выходные</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-xl font-bold mb-4">Мы в социальных сетях</h2>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 border rounded-full hover:bg-primary hover:text-white transition-colors">
                    VK
                  </a>
                  <a href="#" className="p-2 border rounded-full hover:bg-primary hover:text-white transition-colors">
                    TG
                  </a>
                  <a href="#" className="p-2 border rounded-full hover:bg-primary hover:text-white transition-colors">
                    YT
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
