import axios, { AxiosResponse } from 'axios';

const geocode = async (data: string): Promise<AxiosResponse> => {
	return axios.get(
		`https://geocode-maps.yandex.ru/1.x/?geocode=${data}&apikey=e41b26d5-0683-48ca-a90d-38d65ac91ee4&lang=Ru-ru`,
		{
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
			},
		}
	);
};

export const yandexService = {
	geocode,
};
