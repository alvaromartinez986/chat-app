export type User = {
	id: string;
	name: string;
};

export type Message = {
	id: string;
	content: string;
	createdAt: string;
	user: User;
};
