import React, { createContext, useContext, useState, useEffect } from 'react';
import { SettingsContext } from './SettingsProvider';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const { notifications: settings } = useContext(SettingsContext) || { notifications: { enabled: true, duration: 3000, sound: false, desktop: false } };

  // Request desktop notification permission on mount
  useEffect(() => {
    if (settings.desktop && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, [settings.desktop]);

  const playNotificationSound = () => {
    if (!settings.sound) return;
    
    // Create a simple notification sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  };

  const showDesktopNotification = (message, type) => {
    if (!settings.desktop || !('Notification' in window) || Notification.permission !== 'granted') return;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    new Notification(`${icon} iHOZO Inventory`, {
      body: message,
      icon: '/vite.svg'
    });
  };

  const addNotification = (message, type = 'info') => {
    if (!settings.enabled) return;
    
    const id = Date.now();
    const notification = { id, message, type };
    
    setNotifications(prev => [...prev, notification]);
    
    // Play sound if enabled
    playNotificationSound();
    
    // Show desktop notification if enabled
    showDesktopNotification(message, type);
    
    setTimeout(() => {
      removeNotification(id);
    }, settings.duration);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};