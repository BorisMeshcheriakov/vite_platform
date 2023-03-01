export interface BaseTransactionDetail {
	id: number;
	created: string;
	modified: string;
	uid: string;
	amount: number;
	status: ['n', 'p', 'o', 's', 'f'];
	due_date: string;
	duration: number;
	checked: boolean;
	metadata: string;
	user: number;
	recipient: number;
}

export interface BaseTransactionResponse {
	count: number;
	next: string;
	previos: string;
	results: BaseTransactionDetail[];
}

export interface TransactionCallback {
	id: number;
	transaction_id: string;
	account_id: string;
	amount: number;
	payment_date: string;
	signature: string;
}
