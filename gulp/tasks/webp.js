import { src, dest } from 'gulp';
import changed from 'gulp-changed';
import imgWebp from 'gulp-webp';
import debug from 'gulp-debug';
import browsersync from 'browser-sync';
import config from '../config';

const webp = () => (
  src(config.src.webp)
    .pipe(changed(config.dest.webp, { extension: '.webp' }))
    .pipe(imgWebp())
    .pipe(dest(config.dest.webp))
    .pipe(debug({
      title: 'Images'
    }))
    .on('end', browsersync.reload)
);

export default webp;
