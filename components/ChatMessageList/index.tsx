import React from "react";
import { FlatList } from "react-native";
import ChatMessage from "../ChatMessage";
import { Message } from "../../types";

const mockMessages: Message[] = [
	{
		id: "122",
		content: "hola",
		createdAt: "2020-09-27T15:40:00.000Z",
		user: {
			id: "u1",
			name: "juan",
		},
	},
	{
		id: "1232342",
		content: "como estas",
		createdAt: "2020-09-27T15:40:00.000Z",
		user: {
			id: "1231",
			name: "carlos",
		},
	},
	{
		id: "13222",
		content: "bien",
		createdAt: "2020-09-27T15:40:00.000Z",
		user: {
			id: "u1",
			name: "juan",
		},
	},
];

const ChatMessageList = () => {
	return (
		<FlatList
			data={mockMessages}
			renderItem={({ item }) => (
				<ChatMessage message={item} />
			)}
			keyExtractor={(item) => item.id}
			inverted
		/>
	);
};

export default ChatMessageList;
