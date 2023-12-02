import React from "react";
import { Button, Text, View } from "react-native";
import styles from "./styles";
import Colors from "../../constants/Colors";
import { Auth } from "aws-amplify";

const index = ({ title }: { title: string }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>
				{title}
			</Text>
			<View style={styles.buttonContainer}>
				<Button
					title="Sign out"
					color={Colors.dark.tint}
					onPress={() => Auth.signOut()}
				/>
			</View>
		</View>
	);
};

export default index;
