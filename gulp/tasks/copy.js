import { src, dest } from 'gulp';

import config from '../config';

const copy = () => src(config.src.root)
  .pipe(dest(config.dest.root));

export default copy;
