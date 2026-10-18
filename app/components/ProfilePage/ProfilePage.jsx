import React, { useState } from 'react';
import './ProfilePage.css';

// Данные для заказов
const ordersData = [
  {
    id: 1,
    title: 'Свадьба «Летний вальс»',
    date: '12.06.2026',
    status: 'completed',
    statusText: 'Выполнено',
    price: '1 200 000 ₽',
    guests: 200,
  },
  {
    id: 2,
    title: 'Корпоратив «ИТ-вечеринка»',
    date: '25.08.2026',
    status: 'in-progress',
    statusText: 'В процессе',
    price: '2 500 000 ₽',
    guests: 500,
  },
  {
    id: 3,
    title: 'Конференция 2026',
    date: '10.10.2026',
    status: 'planned',
    statusText: 'Запланировано',
    price: '3 800 000 ₽',
    guests: 1000,
  },
];

// Данные для сохранённых проектов
const savedProjectsData = [
  { id: 1, title: 'Конференция 2026', budget: '120 000 ₽', type: 'Конференция' },
  { id: 2, title: 'Детский праздник', budget: '30 000 ₽', type: 'Вечеринка' },
  { id: 3, title: 'Зимняя свадьба', budget: '80 000 ₽', type: 'Свадьба' },
  { id: 4, title: 'Корпоратив 2027', budget: '150 000 ₽', type: 'Корпоратив' },
];

// Данные для уведомлений
const notificationsData = [
  {
    id: 1,
    title: 'Статус заказа обновлён',
    message: 'Ваш заказ «Свадьба «Летний вальс» перешёл в стадию подготовки',
    date: 'Сегодня, 14:30',
    type: 'order',
  },
  {
    id: 2,
    title: 'Новое предложение',
    message: 'Специальный пакет «Зимняя сказка» со скидкой 15%',
    date: 'Вчера, 10:15',
    type: 'promo',
  },
  {
    id: 3,
    title: 'Напоминание',
    message: 'До вашего мероприятия осталось 7 дней',
    date: 'Вчера, 09:00',
    type: 'reminder',
  },
];

// Данные для материалов
const materialsData = [
  { id: 1, title: 'План мероприятия «Свадьба»', type: 'PDF', size: '2.4 MB' },
  { id: 2, title: 'Презентация «Корпоратив»', type: 'PPTX', size: '4.8 MB' },
  { id: 3, title: 'Смета «Конференция 2026»', type: 'XLSX', size: '1.2 MB' },
  { id: 4, title: 'Брошюра «Зимняя свадьба»', type: 'PDF', size: '3.1 MB' },
];

// Данные для подписок
const subscriptionsData = [
  { id: 1, label: 'Новости компании', checked: true },
  { id: 2, label: 'Рассылки с акциями', checked: true },
  { id: 3, label: 'Уведомления о статусе заказов', checked: true },
  { id: 4, label: 'Еженедельный дайджест трендов', checked: false },
];

function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'Антон Иванов',
    phone: '+7 (999) 123-45-67',
    email: 'anton@email.ru',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState({ ...profile });
  const [subscriptions, setSubscriptions] = useState(subscriptionsData);
  const [showAllOrders, setShowAllOrders] = useState(false);
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  // Обработчик редактирования профиля
  const handleEditToggle = () => {
    if (isEditing) {
      setProfile({ ...editableProfile });
    }
    setIsEditing(!isEditing);
  };

  const handleProfileChange = (e) => {
    setEditableProfile({
      ...editableProfile,
      [e.target.name]: e.target.value,
    });
  };

  // Обработчик подписок
  const handleSubscriptionToggle = (id) => {
    setSubscriptions(
      subscriptions.map((sub) =>
        sub.id === id ? { ...sub, checked: !sub.checked } : sub
      )
    );
  };

  // Обработчик уведомлений
  const handleMarkAllRead = () => {
    alert('Все уведомления отмечены как прочитанные');
  };

  // Обработчик скачивания материала
  const handleDownload = (title) => {
    alert(`Скачивание файла: ${title}`);
  };

  // Рендер активного раздела
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfile();
      case 'orders':
        return renderOrders();
      case 'projects':
        return renderProjects();
      case 'notifications':
        return renderNotifications();
      case 'materials':
        return renderMaterials();
      case 'subscriptions':
        return renderSubscriptions();
      default:
        return renderProfile();
    }
  };

  // ===== РАЗДЕЛ: ПРОФИЛЬ КЛИЕНТА =====
  const renderProfile = () => (
    <div className="tab-content profile-content">
      <h2>Профиль клиента</h2>
      <p className="tab-description">Просмотр и редактирование личной информации</p>

      <div className="profile-card">
        <div className="profile-avatar">
          <span>{profile.name.charAt(0)}</span>
        </div>
        <div className="profile-fields">
          <div className="field-group">
            <label>Имя</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editableProfile.name}
                onChange={handleProfileChange}
              />
            ) : (
              <p className="field-value">{profile.name}</p>
            )}
          </div>
          <div className="field-group">
            <label>Телефон</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={editableProfile.phone}
                onChange={handleProfileChange}
              />
            ) : (
              <p className="field-value">{profile.phone}</p>
            )}
          </div>
          <div className="field-group">
            <label>Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editableProfile.email}
                onChange={handleProfileChange}
              />
            ) : (
              <p className="field-value">{profile.email}</p>
            )}
          </div>
        </div>
        <button className="btn-edit" onClick={handleEditToggle}>
          {isEditing ? 'Сохранить' : 'Редактировать'}
        </button>
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: ИСТОРИЯ ЗАКАЗОВ =====
  const renderOrders = () => {
    const displayedOrders = showAllOrders ? ordersData : ordersData.slice(0, 2);
    return (
      <div className="tab-content orders-content">
        <h2>История заказов</h2>
        <p className="tab-description">Архив всех выполненных заказов</p>

        <div className="orders-list">
          {displayedOrders.map((order) => (
            <div key={order.id} className={`order-card status-${order.status}`}>
              <div className="order-header">
                <h3>{order.title}</h3>
                <span className={`order-status status-${order.status}`}>
                  {order.statusText}
                </span>
              </div>
              <div className="order-details">
                <span className="order-date">{order.date}</span>
                <span className="order-guests">{order.guests} гостей</span>
                <span className="order-price">{order.price}</span>
              </div>
              <button className="btn-link">Подробнее →</button>
            </div>
          ))}
        </div>

        {ordersData.length > 2 && (
          <button className="btn-outline" onClick={() => setShowAllOrders(!showAllOrders)}>
            {showAllOrders ? 'Скрыть' : 'Показать все заказы'}
          </button>
        )}
      </div>
    );
  };

  // ===== РАЗДЕЛ: СОХРАНЁННЫЕ ПРОЕКТЫ =====
  const renderProjects = () => (
    <div className="tab-content projects-content">
      <h2>Сохранённые проекты</h2>
      <p className="tab-description">Избранные идеи и примеры мероприятий</p>

      <div className="projects-grid">
        {savedProjectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <span className="project-type">{project.type}</span>
            <p className="project-budget">Бюджет: {project.budget}</p>
            <div className="project-actions">
              <button className="btn-link">Открыть →</button>
              <button className="btn-link delete">Удалить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: УВЕДОМЛЕНИЯ =====
  const renderNotifications = () => {
    const displayedNotifications = showAllNotifications
      ? notificationsData
      : notificationsData.slice(0, 2);
    return (
      <div className="tab-content notifications-content">
        <h2>Уведомления</h2>
        <p className="tab-description">Информация о статусе заказов, новых предложениях</p>

        <div className="notifications-actions">
          <span className="notification-count">
            {notificationsData.length} уведомлений
          </span>
          <button className="btn-outline small" onClick={handleMarkAllRead}>
            Отметить все прочитанными
          </button>
        </div>

        <div className="notifications-list">
          {displayedNotifications.map((notif) => (
            <div key={notif.id} className={`notification-card type-${notif.type}`}>
             
              <div className="notification-body">
                <h4>{notif.title}</h4>
                <p>{notif.message}</p>
                <span className="notification-date">{notif.date}</span>
              </div>
            </div>
          ))}
        </div>

        {notificationsData.length > 2 && (
          <button
            className="btn-outline"
            onClick={() => setShowAllNotifications(!showAllNotifications)}
          >
            {showAllNotifications ? 'Скрыть' : 'Показать все уведомления'}
          </button>
        )}
      </div>
    );
  };

  // ===== РАЗДЕЛ: ИНТЕРАКТИВНЫЕ МАТЕРИАЛЫ =====
  const renderMaterials = () => (
    <div className="tab-content materials-content">
      <h2>Интерактивные материалы</h2>
      <p className="tab-description">
        Доступ к документам и файлам: планы мероприятий, презентации
      </p>

      <div className="materials-list">
        {materialsData.map((material) => (
          <div key={material.id} className="material-card">
          
            <div className="material-info">
              <h4>{material.title}</h4>
              <span className="material-meta">
                {material.type} • {material.size}
              </span>
            </div>
            <button
              className="btn-download"
              onClick={() => handleDownload(material.title)}
            >
              Скачать ↓
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // ===== РАЗДЕЛ: НАСТРОЙКА ПОДПИСОК =====
  const renderSubscriptions = () => (
    <div className="tab-content subscriptions-content">
      <h2>Настройка подписок</h2>
      <p className="tab-description">
        Управление подписками на новости, рассылки и уведомления
      </p>

      <div className="subscriptions-list">
        {subscriptions.map((sub) => (
          <div key={sub.id} className="subscription-item">
            <label className="switch">
              <input
                type="checkbox"
                checked={sub.checked}
                onChange={() => handleSubscriptionToggle(sub.id)}
              />
              <span className="slider round"></span>
            </label>
            <span className="subscription-label">{sub.label}</span>
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={() => alert('Настройки сохранены!')}>
        Сохранить настройки
      </button>
    </div>
  );

  return (
    <div className="profile-page">
      {/* ===== ШАПКА ===== */}
      <header className="profile-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">EventSpark</div>
            <nav className="nav-menu">
              <a href="/">Главная</a>
              <a href="/services">Услуги</a>
              <a href="/portfolio">Портфолио</a>
              <a href="/contacts">Контакты</a>
            </nav>
            <button className="btn-logout">Выйти</button>
          </div>
        </div>
      </header>

      {/* ===== ОСНОВНАЯ ОБЛАСТЬ ===== */}
      <div className="profile-main">
        <div className="container">
          <div className="profile-layout">
            {/* ===== БОКОВОЕ МЕНЮ ===== */}
            <aside className="profile-sidebar">
              <div className="sidebar-user">
                <div className="sidebar-avatar">
                  {profile.name.charAt(0)}
                </div>
                <h3>{profile.name}</h3>
                <p>{profile.email}</p>
              </div>

              <nav className="sidebar-nav">
                <button
                  className={activeTab === 'profile' ? 'active' : ''}
                  onClick={() => setActiveTab('profile')}
                >
                  Профиль клиента
                </button>
                <button
                  className={activeTab === 'orders' ? 'active' : ''}
                  onClick={() => setActiveTab('orders')}
                >
                  История заказов
                </button>
                <button
                  className={activeTab === 'projects' ? 'active' : ''}
                  onClick={() => setActiveTab('projects')}
                >
                  Сохранённые проекты
                </button>
                <button
                  className={activeTab === 'notifications' ? 'active' : ''}
                  onClick={() => setActiveTab('notifications')}
                >
                  Уведомления
                  <span className="badge">{notificationsData.length}</span>
                </button>
                <button
                  className={activeTab === 'materials' ? 'active' : ''}
                  onClick={() => setActiveTab('materials')}
                >
                  Интерактивные материалы
                </button>
                <button
                  className={activeTab === 'subscriptions' ? 'active' : ''}
                  onClick={() => setActiveTab('subscriptions')}
                >
                  Настройка подписок
                </button>
              </nav>
            </aside>

            {/* ===== КОНТЕНТНАЯ ОБЛАСТЬ ===== */}
            <main className="profile-content-area">
              {renderContent()}
            </main>
          </div>
        </div>
      </div>

      {/* ===== ПОДВАЛ ===== */}
      <footer className="profile-footer">
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

export default ProfilePage;