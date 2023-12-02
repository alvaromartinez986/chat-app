import { View } from "react-native";

import { useRouter } from "expo-router";
import ChatMessageList from "../../components/ChatMessageList";
import ChatInput from "../../components/ChatInput";

export default function IndexScreen() {
	const router = useRouter();
	return (
		<View style={{ height: "100%" }}>
			<ChatMessageList />
			<ChatInput />
		</View>
	);
}
