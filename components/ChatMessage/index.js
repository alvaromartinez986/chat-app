import React from "react";
import { Text, View } from "../Themed";
import moment from "moment";
import styles from "./styles";
import { useAppContext } from "../../provider/AppContext";


const ChatMessage = ({
	message,
}) => {
	const { user } = useAppContext();

	const isMyMessage = () => {
		return message.userID === user.id;

	};

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.messageBox,
					{
						backgroundColor: isMyMessage()
							? "#294C60"
							: "#001B2E",
						marginLeft: isMyMessage() ? 50 : 0,
						marginRight: isMyMessage() ? 0 : 50,
					},
				]}
			>
				<Text>{message.text}</Text>
				<Text style={styles.time}>
					{moment(message.createdAt).fromNow()}
				</Text>
			</View>
		</View>
	);
};

export default ChatMessage;
