import { src, dest } from 'gulp';
import gfavicons from "gulp-favicons";
import debug from "gulp-debug";
import config from '../config';

const favicons = () => {
    return src(config.src.favicons)
        .pipe(gfavicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(dest(config.dest.favicons))
        .pipe(debug({
            "title": "Favicons"
        }));
};

export default favicons;
