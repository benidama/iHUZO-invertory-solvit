import React, { useContext } from 'react';
import { Bell, Volume2, Monitor, Mail } from 'lucide-react';
import { SettingsContext } from '../contexts/SettingsProvider';
import { useNotifications } from '../hooks/useNotifications';
import { useLanguage } from '../contexts/LanguageContext';
import { translate } from '../utils/translate';

const NotificationSettings = () => {
  const { notifications, updateNotificationSettings } = useContext(SettingsContext);
  const { notifySettingsSaved } = useNotifications();
  const { language } = useLanguage();

  const handleToggle = (setting) => {
    updateNotificationSettings({ [setting]: !notifications[setting] });
    notifySettingsSaved();
  };

  const handleDurationChange = (duration) => {
    updateNotificationSettings({ duration: parseInt(duration) });
    notifySettingsSaved();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold">{translate('notificationSettings', language)}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-gray-500" />
            <span>{translate('enableNotifications', language)}</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.enabled}
              onChange={() => handleToggle('enabled')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-gray-500" />
            <span>{translate('soundNotifications', language)}</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.sound}
              onChange={() => handleToggle('sound')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-gray-500" />
            <span>{translate('desktopNotifications', language)}</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.desktop}
              onChange={() => handleToggle('desktop')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>{translate('emailNotifications', language)}</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => handleToggle('email')}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span>{translate('displayDuration', language)}</span>
          <select
            value={notifications.duration}
            onChange={(e) => handleDurationChange(e.target.value)}
            className="px-3 py-1 border rounded-md text-sm"
          >
            <option value={2000}>2 {translate('seconds', language)}</option>
            <option value={3000}>3 {translate('seconds', language)}</option>
            <option value={5000}>5 {translate('seconds', language)}</option>
            <option value={10000}>10 {translate('seconds', language)}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;