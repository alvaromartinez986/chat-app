import { View, TextInput } from "react-native";
import styles from "./style";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createMessage } from "../../src/graphql/mutations";
import { useAppContext } from "../../provider/AppContext";
import { API, graphqlOperation } from "aws-amplify";

const ChatInput = () => {
	const [message, setMessage] = useState("");
	const { user, room } = useAppContext();

	const onPress = async () => {
		const newMessage = {
			text: message,
			userID: user.id,
			chatroomID: room.id,
			createdAt: new Date().toISOString()
		};
		const newMessageResponse = await API.graphql(
			graphqlOperation(createMessage, {
				input: newMessage
			})
		);

		setMessage("");
	};

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<TextInput
					placeholder="Type a message"
					style={styles.textInput}
					multiline
					value={message}
					onChangeText={setMessage}
				/>
			</View>
			<TouchableOpacity onPress={onPress}>
				<View style={styles.buttonContainer}>
					<MaterialIcons
						name="send"
						size={28}
						color="#FFF"
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default ChatInput;
