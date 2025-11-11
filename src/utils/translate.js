// src/utils/translate.js

const translations = {
  en: {
    // Navigation
    dashboard: "Dashboard",
    users: "Users",
    products: "Products",
    categories: "Categories",
    logout: "Logout",
    
    // Common
    welcome: "Welcome",
    welcomeBack: "Welcome Back",
    changeProfilePhoto: "Change profile photo",
    notificationSettings: "Notification Settings",
    
    // Notifications
    enableNotifications: "Enable Notifications",
    soundNotifications: "Sound Notifications",
    desktopNotifications: "Desktop Notifications",
    emailNotifications: "Email Notifications",
    displayDuration: "Display Duration",
    
    // Time
    seconds: "seconds",
    
    // Actions
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    
    // Messages
    settingsSaved: "Settings saved",
    languageChanged: "Language changed to"
  },
  fr: {
    // Navigation
    dashboard: "Tableau de bord",
    users: "Utilisateurs",
    products: "Produits",
    categories: "Catégories",
    logout: "Déconnexion",
    
    // Common
    welcome: "Bienvenue",
    welcomeBack: "Bon retour",
    changeProfilePhoto: "Changer la photo de profil",
    notificationSettings: "Paramètres de notification",
    
    // Notifications
    enableNotifications: "Activer les notifications",
    soundNotifications: "Notifications sonores",
    desktopNotifications: "Notifications de bureau",
    emailNotifications: "Notifications par e-mail",
    displayDuration: "Durée d'affichage",
    
    // Time
    seconds: "secondes",
    
    // Actions
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    add: "Ajouter",
    
    // Messages
    settingsSaved: "Paramètres enregistrés",
    languageChanged: "Langue changée en"
  },
  es: {
    // Navigation
    dashboard: "Panel de control",
    users: "Usuarios",
    products: "Productos",
    categories: "Categorías",
    logout: "Cerrar sesión",
    
    // Common
    welcome: "Bienvenido",
    welcomeBack: "Bienvenido de nuevo",
    changeProfilePhoto: "Cambiar foto de perfil",
    notificationSettings: "Configuración de notificaciones",
    
    // Notifications
    enableNotifications: "Habilitar notificaciones",
    soundNotifications: "Notificaciones de sonido",
    desktopNotifications: "Notificaciones de escritorio",
    emailNotifications: "Notificaciones por correo",
    displayDuration: "Duración de visualización",
    
    // Time
    seconds: "segundos",
    
    // Actions
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    add: "Añadir",
    
    // Messages
    settingsSaved: "Configuración guardada",
    languageChanged: "Idioma cambiado a"
  },
  sw: {
    // Navigation
    dashboard: "Dashibodi",
    users: "Watumiaji",
    products: "Bidhaa",
    categories: "Makundi",
    logout: "Ondoka",
    
    // Common
    welcome: "Karibu",
    welcomeBack: "Karibu tena",
    changeProfilePhoto: "Badilisha picha ya wasifu",
    notificationSettings: "Mipangilio ya arifa",
    
    // Notifications
    enableNotifications: "Wezesha arifa",
    soundNotifications: "Arifa za sauti",
    desktopNotifications: "Arifa za desktop",
    emailNotifications: "Arifa za barua pepe",
    displayDuration: "Muda wa kuonyesha",
    
    // Time
    seconds: "sekunde",
    
    // Actions
    save: "Hifadhi",
    cancel: "Ghairi",
    delete: "Futa",
    edit: "Hariri",
    add: "Ongeza",
    
    // Messages
    settingsSaved: "Mipangilio imehifadhiwa",
    languageChanged: "Lugha imebadilishwa kuwa"
  },
  ru: {
    // Navigation
    dashboard: "Панель управления",
    users: "Пользователи",
    products: "Товары",
    categories: "Категории",
    logout: "Выйти",
    
    // Common
    welcome: "Добро пожаловать",
    welcomeBack: "Добро пожаловать обратно",
    changeProfilePhoto: "Изменить фото профиля",
    notificationSettings: "Настройки уведомлений",
    
    // Messages
    settingsSaved: "Настройки сохранены",
    languageChanged: "Язык изменен на"
  },
  zh: {
    // Navigation
    dashboard: "仪表板",
    users: "用户",
    products: "产品",
    categories: "类别",
    logout: "退出",
    
    // Common
    welcome: "欢迎",
    welcomeBack: "欢迎回来",
    changeProfilePhoto: "更改头像",
    notificationSettings: "通知设置",
    
    // Messages
    settingsSaved: "设置已保存",
    languageChanged: "语言已更改为"
  }
};

export const translate = (key, language) => {
  return translations[language]?.[key] || translations.en[key] || key;
};

export const t = (key, language) => translate(key, language);
