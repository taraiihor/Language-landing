import replace from 'gulp-replace'; // Пошук і заміна @img...
import plumber from 'gulp-plumber'; // Обробка помилок
import notify from 'gulp-notify'; // Сповіщення (підказка)
import browsersync from 'browser-sync'; // Локальний сервер
import newer from 'gulp-newer'; // Провірка оновлення картинки
import ifPlugin from 'gulp-if';

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
