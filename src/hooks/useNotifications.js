import { useNotification } from '../contexts/NotificationContext';

export const useNotifications = () => {
  const { addNotification } = useNotification();

  const notifySuccess = (message) => addNotification(message, 'success');
  const notifyError = (message) => addNotification(message, 'error');
  const notifyInfo = (message) => addNotification(message, 'info');
  const notifyWarning = (message) => addNotification(message, 'warning');

  // Common notifications
  const notifyProfileUpdated = () => notifySuccess('Profile updated successfully');
  const notifyLanguageChanged = (language) => notifySuccess(`Language changed to ${language}`);
  const notifySettingsSaved = () => notifySuccess('Settings saved');
  const notifyDataSaved = () => notifySuccess('Data saved successfully');
  const notifyDataDeleted = () => notifySuccess('Data deleted successfully');
  const notifyError401 = () => notifyError('Unauthorized access');
  const notifyError500 = () => notifyError('Server error occurred');

  // Inventory-specific notifications
  const notifyProductAdded = (productName) => notifySuccess(`Product "${productName}" added successfully`);
  const notifyProductUpdated = (productName) => notifySuccess(`Product "${productName}" updated`);
  const notifyProductDeleted = (productName) => notifySuccess(`Product "${productName}" deleted`);
  const notifyLowStock = (productName, quantity) => notifyWarning(`Low stock alert: ${productName} (${quantity} remaining)`);
  const notifyOutOfStock = (productName) => notifyError(`Out of stock: ${productName}`);
  const notifyCategoryAdded = (categoryName) => notifySuccess(`Category "${categoryName}" created`);
  const notifyCategoryDeleted = (categoryName) => notifySuccess(`Category "${categoryName}" deleted`);
  const notifyUserAdded = (userName) => notifySuccess(`User "${userName}" added`);
  const notifyUserDeleted = (userName) => notifySuccess(`User "${userName}" removed`);
  const notifyInventorySync = () => notifySuccess('Inventory synchronized');
  const notifyBackupCreated = () => notifySuccess('Backup created successfully');
  const notifyImportComplete = (count) => notifySuccess(`Import completed: ${count} items processed`);
  const notifyExportComplete = () => notifySuccess('Export completed successfully');

  return {
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
    notifyProfileUpdated,
    notifyLanguageChanged,
    notifySettingsSaved,
    notifyDataSaved,
    notifyDataDeleted,
    notifyError401,
    notifyError500,
    // Inventory notifications
    notifyProductAdded,
    notifyProductUpdated,
    notifyProductDeleted,
    notifyLowStock,
    notifyOutOfStock,
    notifyCategoryAdded,
    notifyCategoryDeleted,
    notifyUserAdded,
    notifyUserDeleted,
    notifyInventorySync,
    notifyBackupCreated,
    notifyImportComplete,
    notifyExportComplete
  };
};