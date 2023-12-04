import { useEffect, useState } from "react";
import {
	API,
	graphqlOperation,
} from "aws-amplify";
import { listChatRooms } from "../src/graphql/queries";



const useFetchRoom = () => {
	const [room, setRoom] = useState("");

	useEffect(() => {
		API.graphql(
			graphqlOperation(listChatRooms)
		).then(result => { setRoom(result?.data.listChatRooms.items[0]) })
	}, []);


	return { room };
};

export default useFetchRoom; 
