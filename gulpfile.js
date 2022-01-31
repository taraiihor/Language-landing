// basic modules – Основні модулі
import gulp from 'gulp';
// Import Path – Імпорт шляхів
import { path } from './gulp/config/path.js';
// Import basic plugins — Імпорт загальні плагіни
import { plugins } from './gulp/config/plugins.js';

//pass the value to a global variable — передаємо значення в глобальну перемінну
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';

//Observer of changes in the file – Спостирігач за змінами в файлфх
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// basic tasks – Основні задачі
const mainTasks = gulp.parallel(copy, html, scss, js, images);

//Sequence of scripts to run – Послідовність сценаріїв для виконання
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

//Експорт сцен
export { dev };
export { build };

//Execute default scripts – Виконання сценаріїв по замовчуванню
gulp.task('default', dev);
