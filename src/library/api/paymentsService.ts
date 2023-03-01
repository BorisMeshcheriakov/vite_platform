import xhr from 'core/axios/config';
import { AxiosResponse } from 'axios';

import { BaseTransactionDetail, BaseTransactionResponse } from 'library/models/payments';

const getBaseTransaction = async (): Promise<AxiosResponse<BaseTransactionResponse>> =>
	xhr.get(`/api/v1/payments/base_transaction/`);

const getStatDate = async (): Promise<AxiosResponse<BaseTransactionResponse>> =>
	xhr.get(`/api/v1/payments/base_transaction/get_stat_date/`);

const getMonthRecommendations = async (month: string): Promise<AxiosResponse<BaseTransactionResponse>> =>
	xhr.get(`/api/v1/payments/base_transaction/${month}/get_month_recomendations/`);

const getYearState = (year: string): Promise<AxiosResponse<BaseTransactionResponse>> =>
	xhr.get(`/api/v1/payments/base_transaction/${year}/get_year_state/`);

export const paymentsService = {
	getBaseTransaction,
	getStatDate,
	getMonthRecommendations,
	getYearState,
};
