import { src, dest } from 'gulp';
import debug from 'gulp-debug';
import config from '../config';

const fonts = () => src(config.src.fonts)
  .pipe(dest(config.dest.fonts))
	.pipe(debug({
		"title": "Fonts"
	}));

export default fonts;
