import { StyleSheet, Button } from "react-native";

import { useRouter } from "expo-router";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import {
	Amplify,
} from "aws-amplify";
import awsconfig from "../src/aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import useSetUser from "../hooks/useSetUser";

Amplify.configure({
	...awsconfig,
	Analytics: { disabled: true },
});

function IndexScreen() {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<Button
				title="Enter to the room"
				color={Colors.light.tint}
				onPress={() => router.push("/chats")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default withAuthenticator(IndexScreen);
