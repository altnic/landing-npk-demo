import { parallel, series } from 'gulp';
import clean from './gulp/tasks/clean';
import views from './gulp/tasks/views';
import styles from './gulp/tasks/styles';
import scripts from './gulp/tasks/scripts';
import images from './gulp/tasks/images';
import webp from './gulp/tasks/webp';
import sprites from './gulp/tasks/sprites';
import fonts from './gulp/tasks/fonts';
import favicons from './gulp/tasks/favicons';
import server from './gulp/tasks/server';
import config from './gulp/config';

config.setEnv();

export const development = series(clean,
  parallel(views, styles, scripts, images, webp, sprites, fonts, favicons),
  parallel(server));

export const prod = series(clean,
  parallel(views, styles, scripts, images, webp, sprites, fonts, favicons));

export default development;
