import React, { useState, useEffect } from 'react';
import './AboutPage.css';

// Данные для команды
const teamData = [
  {
    id: 1,
    name: 'Анна Смирнова',
    role: 'CEO, основатель',
    experience: '10 лет опыта',
    bio: 'Основатель агентства, эксперт в области event-менеджмента. Реализовала более 500 проектов.',
  },
  {
    id: 2,
    name: 'Иван Петров',
    role: 'Creative Director',
    experience: '8 лет опыта',
    bio: 'Креативный руководитель, создатель уникальных концепций для мероприятий любого масштаба.',
  },
  {
    id: 3,
    name: 'Елена Козлова',
    role: 'Event Manager',
    experience: '6 лет опыта',
    bio: 'Профессиональный организатор, специализируется на свадьбах и частных вечеринках.',
  },
  {
    id: 4,
    name: 'Михаил Соколов',
    role: 'Technical Director',
    experience: '7 лет опыта',
    bio: 'Технический директор, отвечает за звук, свет и оборудование на мероприятиях.',
  },
];

// Данные для партнёров
const partnersData = [
  { id: 1, name: 'Партнёр 1', description: 'Ведущий поставщик декора' },
  { id: 2, name: 'Партнёр 2', description: 'Кейтеринговая компания' },
  { id: 3, name: 'Партнёр 3', description: 'Фото- и видеостудия' },
  { id: 4, name: 'Партнёр 4', description: 'Логистический оператор' },
  { id: 5, name: 'Партнёр 5', description: 'Музыкальное агентство' },
  { id: 6, name: 'Партнёр 6', description: 'Поставщик флористики' },
];

// Данные для наград
const awardsData = [
  {
    id: 1,
    title: 'Best Event Agency 2025',
    description: 'Победа в номинации «Лучшее event-агентство года»',
    year: '2025',
  },
  {
    id: 2,
    title: 'Сертификат качества ISO 9001',
    description: 'Международный сертификат качества услуг',
    year: '2024',
  },
  {
    id: 3,
    title: 'Event Innovation Award',
    description: 'Награда за инновационные подходы в организации мероприятий',
    year: '2023',
  },
];

// Данные для социальных инициатив
const socialData = [
  {
    id: 1,
    title: 'Благотворительные проекты',
    description: 'Помощь детским домам и социальным учреждениям. Ежегодно организуем бесплатные праздники для детей.',
  },
  {
    id: 2,
    title: 'Экологические инициативы',
    description: 'Zero waste мероприятия, озеленение городов. Мы заботимся об экологии при организации событий.',
  },
  {
    id: 3,
    title: 'Образовательные программы',
    description: 'Проведение мастер-классов и лекций для студентов в сфере event-менеджмента.',
  },
];

// Данные для истории компании
const historyData = [
  {
    id: 1,
    year: '2020',
    title: 'Основание компании',
    description: 'EventSpark Agency основана Анной Смирновой. Первые 5 успешных мероприятий.',
  },
  {
    id: 2,
    year: '2021',
    title: 'Расширение команды',
    description: 'Присоединение креативного директора и event-менеджера. Увеличение портфолио до 50 проектов.',
  },
  {
    id: 3,
    year: '2022',
    title: 'Выход на новый рынок',
    description: 'Открытие офиса в Санкт-Петербурге. Проведение первой международной конференции.',
  },
  {
    id: 4,
    year: '2023',
    title: 'Признание и награды',
    description: 'Получение премии Best Event Agency 2023. Партнёрство с ведущими поставщиками.',
  },
  {
    id: 5,
    year: '2024',
    title: 'Сертификация и инновации',
    description: 'Получение сертификата ISO 9001. Внедрение новых технологий в организацию мероприятий.',
  },
  {
    id: 6,
    year: '2025',
    title: 'Новые достижения',
    description: 'Повторная победа в номинации Best Event Agency. Расширение социальных проектов.',
  },
];

function AboutPage() {
  const [activeTab, setActiveTab] = useState('history');

  // Анимация появления при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTab]);

  // Рендер активного раздела
  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return renderHistory();
      case 'team':
        return renderTeam();
      case 'partners':
        return renderPartners();
      case 'awards':
        return renderAwards();
      case 'social':
        return renderSocial();
      default:
        return renderHistory();
    }
  };

  // ===== РАЗДЕЛ: ИСТОРИЯ КОМПАНИИ =====
  const renderHistory = () => (
    <div className="tab-content history-content">
      <h2>История компании</h2>
      <p className="tab-description">Описание создания и этапов развития EventSpark Agency</p>

      <div className="history-timeline">
        {historyData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-line"></div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mission-block">
        <h3>Наша миссия</h3>
        <p>
          Создаём незабываемые события, вдохновляя людей. Внимание к деталям — наша философия.
          Мы превращаем идеи в реальность, делая каждое мероприятие уникальным.
        </p>
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: КОМАНДА =====
  const renderTeam = () => (
    <div className="tab-content team-content">
      <h2>Команда</h2>
      <p className="tab-description">Биографии ключевых сотрудников</p>

      <div className="team-grid">
        {teamData.map((member) => (
          <div key={member.id} className="team-card animate-on-scroll">
            <div className="team-avatar">{member.name.charAt(0)}</div>
            <h3>{member.name}</h3>
            <span className="team-role">{member.role}</span>
            <span className="team-experience">{member.experience}</span>
            <p className="team-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: ПАРТНЁРЫ =====
  const renderPartners = () => (
    <div className="tab-content partners-content">
      <h2>Партнёры</h2>
      <p className="tab-description">Перечень подрядчиков и поставщиков услуг</p>

      <div className="partners-grid">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-card animate-on-scroll">
            <img className="partner-logo" src={"images/user_icon.png"} alt="Лого"/>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: НАГРАДЫ И СЕРТИФИКАТЫ =====
  const renderAwards = () => (
    <div className="tab-content awards-content">
      <h2>Награды и сертификаты</h2>
      <p className="tab-description">Признания и достижения компании</p>

      <div className="awards-list">
        {awardsData.map((award) => (
          <div key={award.id} className="award-card animate-on-scroll">
            <div className="award-icon">🏆</div>
            <div className="award-info">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              <span className="award-year">{award.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: СОЦИАЛЬНЫЕ ИНИЦИАТИВЫ =====
  const renderSocial = () => (
    <div className="tab-content social-content">
      <h2>Социальные инициативы</h2>
      <p className="tab-description">Благотворительные проекты компании</p>

      <div className="social-list">
        {socialData.map((item) => (
          <div key={item.id} className="social-card animate-on-scroll">
            <div className="social-icon">❤️</div>
            <div className="social-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="social-cta">
        <h3>Присоединяйтесь к нашим инициативам</h3>
        <p>
          Мы всегда открыты для сотрудничества с благотворительными организациями и волонтёрами.
          Вместе мы можем сделать мир лучше!
        </p>
        <button className="btn-primary">Связаться с нами</button>
      </div>
    </div>
  );

  return (
    <div className="about-page">
      {/* ===== ШАПКА ===== */}
      <header className="about-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">EventSpark</div>
            <nav className="nav-menu">
              <a href="/">Главная</a>
              <a href="/services">Услуги</a>
              <a href="/portfolio">Портфолио</a>
              <a href="/contacts">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ===== ОСНОВНАЯ ОБЛАСТЬ ===== */}
      <div className="about-main">
        <div className="container">
          <div className="about-layout">
            {/* ===== БОКОВОЕ МЕНЮ ===== */}
            <aside className="about-sidebar">
              <h3>О нас</h3>
              <nav className="sidebar-nav">
                <button
                  className={activeTab === 'history' ? 'active' : ''}
                  onClick={() => setActiveTab('history')}
                >
                  История компании
                </button>
                <button
                  className={activeTab === 'team' ? 'active' : ''}
                  onClick={() => setActiveTab('team')}
                >
                  Команда
                </button>
                <button
                  className={activeTab === 'partners' ? 'active' : ''}
                  onClick={() => setActiveTab('partners')}
                >
                  Партнёры
                </button>
                <button
                  className={activeTab === 'awards' ? 'active' : ''}
                  onClick={() => setActiveTab('awards')}
                >
                  Награды и сертификаты
                </button>
                <button
                  className={activeTab === 'social' ? 'active' : ''}
                  onClick={() => setActiveTab('social')}
                >
                  Социальные инициативы
                </button>
              </nav>
            </aside>

            {/* ===== КОНТЕНТНАЯ ОБЛАСТЬ ===== */}
            <main className="about-content-area">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>

      {/* ===== ПОДВАЛ ===== */}
      <footer className="about-footer">
        <div className="container">
          <div className="footer-content">
            <span>© 2026 EventSpark Agency</span>
            <span>+7 (999) 123-45-67</span>
            <span>info@eventspark.ru</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;