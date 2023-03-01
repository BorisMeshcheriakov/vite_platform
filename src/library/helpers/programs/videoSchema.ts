import * as yup from 'yup';

const schema = yup.object().shape({
	title: yup.string().required('Укажите название видеоролика').min(3, 'Слишком короткое название'),
	// description: yup
	// 	.string()
	// 	.required('Укажите описание видеоролика')
	// 	.min(3, 'Слишком короткое описание'),
	screenshot_url: yup.mixed().test({
		name: 'image is requered',
		test: (value, ctx) => {
			if (
				!value ||
				(typeof value === 'string' && value === '/events/emptyImage.png') ||
				(value instanceof FileList && !value.length)
			) {
				return ctx.createError({
					message: 'Не добавлено изображение ролика',
					path: 'screenshot_url',
				});
			}
			return true;
		},
	}),
	video: yup
		.object()
		.shape({
			url: yup.string(),
			file: yup.mixed(),
		})
		.test({
			name: 'video is required',
			test: (value, ctx) => {
				switch (value.video_type) {
					case 'Y':
						if (!value.url || !value.url.length) {
							return ctx.createError({
								message: 'Не добавлена ссылка',
								path: 'video',
							});
						}
						break;

					case 'B':
						if (!value.file || !value.file.length) {
							return ctx.createError({
								message: 'Не добавлен видеофайл',
								path: 'video',
							});
						}
						break;
					default:
						break;
				}
				return true;
			},
		}),
	tags: yup.array().min(1, 'Нужно выбрать хотя бы один тег'),
});

export default schema;
