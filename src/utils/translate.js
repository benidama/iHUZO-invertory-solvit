// src/utils/translate.js

const translations = {
  en: {
    welcome: "Welcome",
    changeProfilePhoto: "Change profile photo",
  },
  fr: {
    welcome: "Bienvenue",
    changeProfilePhoto: "Changer la photo de profil",
  },
  es: {
    welcome: "Bienvenido",
    changeProfilePhoto: "Cambiar foto de perfil",
  },
  // Add more translations as needed
};

export const translate = (key, language) => {
  return translations[language][key] || key;
};
