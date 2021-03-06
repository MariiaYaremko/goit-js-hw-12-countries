import * as Pnotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const notificationSpecific = () => {
  Pnotify.error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 500,
  });
};

const errorNotification = () => {
  Pnotify.error({
    text: 'Country is not found.',
    delay: 500,
  });
};
const successNotification = () => {
  Pnotify.success({
    text: 'Country is found.',
    delay: 500,
  });
};

export { notificationSpecific, errorNotification, successNotification };
