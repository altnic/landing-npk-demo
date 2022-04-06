import { src, dest, parallel } from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import browsersync from 'browser-sync';
import config from '../config';


const spriteMono = () => {
	const options = {
		shape: {
			dimension: {
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: {
				padding: 0
			},
			transform: [
				{
					svgo: {
						plugins: [
							{
								removeAttrs: {attrs: ['class', 'data-name', 'fill.*', 'stroke.*']},
							},
						],
					},
				},
			],
		},
		mode: {
			symbol: {
				dest: '.',
				sprite: 's-mono.svg',
			},
		},
	};
	return src(config.src.spritesMono)
    .pipe(svgSprite(options)).on('error', (error) => { console.log(error); })
    .pipe(dest(config.dest.sprites))
    .on('end', browsersync.reload);
};

const spriteMulti = () => {
	const options = {
		shape: {
			dimension: {
				maxWidth: 500,
				maxHeight: 500
			},
			spacing: {
				padding: 0
			},
			transform: [
				{
					svgo: {
						plugins: [
							{removeAttrs: {attrs: ['class', 'data-name']}},
							{removeUselessStrokeAndFill: false},
							{inlineStyles: true},
						],
					},
				},
			],
		},
		mode: {
			symbol: {
				dest: '.',
				sprite: 's-multi.svg',
			},
		},
	};
	return src(config.src.spritesMulti)
    .pipe(svgSprite(options)).on('error', (error) => { console.log(error); })
    .pipe(dest(config.dest.sprites))
    .on('end', browsersync.reload);
};

// const sprite = () => {
//   const options = {
//     shape: {
//       dimension: {
//         maxWidth: 500,
//         maxHeight: 500
//       },
//       spacing: {
//         padding: 0
//       },
//       transform: [{
//         svgo: {
//           plugins: [
//             { removeViewBox: false },
//             { removeUnusedNS: false },
//             { removeUselessStrokeAndFill: true },
//             { cleanupIDs: false },
//             { removeComments: true },
//             { removeEmptyAttrs: true },
//             { removeEmptyText: true },
//             { collapseGroups: true },
//             { removeAttrs: { attrs: '(fill|stroke|style)' } }
//           ]
//         }
//       }]
//     },
//     mode: {
//       symbol: {
//         dest: '.',
//         sprite: 'sprite.svg'
//       }
//     }
//   };

//   return src(config.src.sprites)
//     .pipe(svgSprite(options)).on('error', (error) => { console.log(error); })
//     .pipe(dest(config.dest.sprites))
//     .on('end', browsersync.reload);
// };

const sprites = parallel(spriteMono, spriteMulti);

export default sprites;
