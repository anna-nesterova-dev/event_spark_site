import React, { useState, useEffect } from "react";
import "./HomePage.css";

// Данные
const popularServices = [
  { id: 1, title: "Свадьбы", price: "от 50 000 ₽", category: "wedding" },
  { id: 2, title: "Корпоративы", price: "от 80 000 ₽", category: "corporate" },
  { id: 3, title: "Вечеринки", price: "от 30 000 ₽", category: "party" },
];

const portfolioProjects = [
  { id: 1, title: "Свадьба «Летний вальс»", category: "Свадьба", guests: 200 },
  {
    id: 2,
    title: "Корпоратив «ИТ-вечеринка»",
    category: "Корпоратив",
    guests: 500,
  },
];

const newOffers = [
  {
    id: 1,
    title: "Пакет «Зимняя сказка»",
    description: "Свадебный пакет с фотографом и декором",
  },
  {
    id: 2,
    title: "Эксклюзивная идея: Выездная церемония",
    description: "Проведение на природе с шатром",
  },
];

const reviews = [
  {
    id: 1,
    name: "Анна",
    text: "Всё прошло идеально, спасибо команде!",
    rating: 5,
    category: "Свадьба",
  },
  {
    id: 2,
    name: "Игорь",
    text: "Отличная организация конференции!",
    rating: 5,
    category: "Корпоратив",
  },
  {
    id: 3,
    name: "Елена",
    text: "Дети были в восторге! Спасибо!",
    rating: 5,
    category: "Детский праздник",
  },
];

const promotions = [
  {
    id: 1,
    title: "Скидка 15% на свадьбы",
    description: "При заказе до 1 августа",
  },
  {
    id: 2,
    title: "Бесплатный декор",
    description: "При заказе корпоратива от 100 гостей",
  },
];

const news = [
  {
    id: 1,
    title: "Новый тренд: эко-свадьбы",
    date: "15.06.2026",
    excerpt: "Натуральные материалы и минимализм",
  },
  {
    id: 2,
    title: "Партнёрство с ведущими агентствами",
    date: "10.06.2026",
    excerpt: "Расширяем сеть поставщиков",
  },
];

function HomePage() {
  const [consultationForm, setConsultationForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", consultationForm);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleConsultationChange = (e) => {
    setConsultationForm({
      ...consultationForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleReviewClick = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <div className="home-page">
      {/* ===== ШАПКА ===== */}
      <header className="home-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">EventSpark</div>
            <nav className="nav-menu">
              <a href="#services">Услуги</a>
              <a href="#portfolio">Портфолио</a>
              <a href="#reviews">Отзывы</a>
              <a href="#news">Новости</a>
              <a href="#contacts">Контакты</a>
            </nav>
            <div className="header-actions">
              <button className="btn-login">Войти</button>
              <button className="btn-register">Регистрация</button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== 1. ПРИВЕТСТВИЕ ===== */}
      <section className="hero-section animate-on-scroll">
        <div className="container">
          <div className="hero-content">
            <h1>EventSpark Agency</h1>
            <p className="mission">Создаём незабываемые события с 2020 года</p>
            <p className="philosophy">Внимание к деталям — наша философия</p>
            <p className="sub-text">
              Организация свадеб, корпоративов, вечеринок, конференций
            </p>
            <button className="btn-primary">Узнать больше</button>
          </div>
        </div>
      </section>

      {/* ===== 2. ПОПУЛЯРНЫЕ УСЛУГИ ===== */}
      <section id="services" className="services-section animate-on-scroll">
        <div className="container">
          <h2>Популярные услуги</h2>
          <div className="services-grid">
            {popularServices.map((service) => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p className="service-price">{service.price}</p>
                <button className="btn-outline">Подробнее</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. ПРИМЕРЫ МЕРОПРИЯТИЙ ===== */}
      <section id="portfolio" className="portfolio-section animate-on-scroll">
        <div className="container">
          <h2>Примеры мероприятий</h2>
          <div className="portfolio-grid">
            {
              <>
                <div key={portfolioProjects.id} className="portfolio-card">
                  <img
                    className="portfolio-image"
                    src={"images/the_summer_waltz_wedding.jpg"}
                    alt="Фото"
                  />
                  <div className="portfolio-info">
                    <span className="portfolio-category">
                      {portfolioProjects.category}
                    </span>
                    <h3>{portfolioProjects[0].title}</h3>
                    <p>{portfolioProjects[0].guests}+ гостей</p>
                    <button className="btn-link">Подробнее →</button>
                  </div>
                </div>
                <div key={portfolioProjects.id} className="portfolio-card">
                  <img
                    className="portfolio-image"
                    src={"images/it_party.jpg"}
                    alt="Фото"
                  />
                  <div className="portfolio-info">
                    <span className="portfolio-category">
                      {portfolioProjects.category}
                    </span>
                    <h3>{portfolioProjects[1].title}</h3>
                    <p>{portfolioProjects[1].guests}+ гостей</p>
                    <button className="btn-link">Подробнее →</button>
                  </div>
                </div>
              </>
            }
          </div>
        </div>
      </section>

      {/* ===== 4. НОВЫЕ ПРЕДЛОЖЕНИЯ ===== */}
      <section className="offers-section animate-on-scroll">
        <div className="container">
          <h2>Новые предложения</h2>
          <div className="offers-grid">
            {newOffers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <span className="offer-badge">Новинка</span>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <button className="btn-link">Узнать больше →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. ОТЗЫВЫ КЛИЕНТОВ ===== */}
      <section id="reviews" className="reviews-section animate-on-scroll">
        <div className="container">
          <h2>Отзывы клиентов</h2>
          <div className="reviews-grid">
            {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-stars">{"★".repeat(review.rating)}</div>
                <p className="review-text">«{review.text}»</p>
                <div className="review-author">
                  <span className="review-name">{review.name}</span>
                  <span className="review-category">{review.category}</span>
                </div>
              </div>
            ))}
          </div>
          {reviews.length > 2 && (
            <button className="btn-outline" onClick={handleReviewClick}>
              {showAllReviews ? "Скрыть" : "Смотреть все отзывы"}
            </button>
          )}
        </div>
      </section>

      {/* ===== 6. АКЦИИ И СКИДКИ ===== */}
      <section className="promotions-section animate-on-scroll">
        <div className="container">
          <h2>Акции и скидки</h2>
          <div className="promotions-grid">
            {promotions.map((promo) => (
              <div key={promo.id} className="promo-card">
                <div className="promo-badge">Акция</div>
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
                <button className="btn-outline">Подробнее</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. БЫСТРАЯ КОНСУЛЬТАЦИЯ ===== */}
      <section className="consultation-section animate-on-scroll">
        <div className="container">
          <h2>Быстрая консультация</h2>
          <p className="consultation-sub">
            Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
          </p>
          <form
            className="consultation-form"
            onSubmit={handleConsultationSubmit}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={consultationForm.name}
                onChange={handleConsultationChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                value={consultationForm.phone}
                onChange={handleConsultationChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={consultationForm.email}
                onChange={handleConsultationChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Опишите ваше мероприятие"
              value={consultationForm.message}
              onChange={handleConsultationChange}
              rows="3"
            />
            <button type="submit" className="btn-primary">
              Отправить заявку
            </button>
          </form>
          {formSubmitted && (
            <div className="success-message">
              ✅ Заявка отправлена! Менеджер свяжется с вами.
            </div>
          )}
        </div>
      </section>

      {/* ===== 8. НОВОСТИ ===== */}
      <section id="news" className="news-section animate-on-scroll">
        <div className="container">
          <h2>Новости</h2>
          <div className="news-grid">
            {news.map((item) => (
              <div key={item.id} className="news-card">
                <span className="news-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <button className="btn-link">Читать →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ПОДВАЛ ===== */}
      <footer className="home-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">EventSpark Agency</div>
            <div className="footer-info">
              <p>© 2026 EventSpark Agency</p>
              <p>+7 (999) 123-45-67</p>
              <p>info@eventspark.ru</p>
            </div>
            <div className="footer-links">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
