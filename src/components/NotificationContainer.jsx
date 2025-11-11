import React from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotification();

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStyles = (type) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800 border-l-4 border-l-green-500';
      case 'error': return 'bg-red-50 border-red-200 text-red-800 border-l-4 border-l-red-500';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800 border-l-4 border-l-yellow-500';
      default: return 'bg-blue-50 border-blue-200 text-blue-800 border-l-4 border-l-blue-500';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className={`flex items-center gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm transform transition-all duration-300 ease-in-out animate-slide-in ${getStyles(notification.type)}`}
          style={{
            animation: 'slideIn 0.3s ease-out'
          }}
        >
          {getIcon(notification.type)}
          <span className="flex-1 text-sm font-medium">{notification.message}</span>
          <button
            onClick={() => removeNotification(notification.id)}
            className="hover:opacity-70 transition-opacity duration-200 p-1 rounded-full hover:bg-black/10"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default NotificationContainer;