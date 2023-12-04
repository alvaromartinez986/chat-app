import React from "react";
import { FlatList } from "react-native";
import ChatMessage from "../ChatMessage";
import useFetchMessagesByRoom from "../../hooks/useFetchMessagesByRoom";
import { useAppContext } from "../../provider/AppContext";

const ChatMessageList = () => {
	const { room } = useAppContext();
	const { messages } = useFetchMessagesByRoom(
		room?.id
	);

	return (
		<FlatList
			data={messages}
			renderItem={({ item }) => (
				<ChatMessage message={item} />
			)}
			keyExtractor={(item) => {
				return item.id;
			}}
			inverted
		/>
	);
};

export default ChatMessageList;
