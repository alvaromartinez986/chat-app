import { useEffect, useState } from "react";
import {
    API,
    graphqlOperation,
} from "aws-amplify";
import { listMessagesByChatRoom } from "../src/graphql/queries";
import { onCreateMessage } from '../src/graphql/subscriptions'



const useFetchMessagesByRoom = (roomId) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            API.graphql(
                graphqlOperation(listMessagesByChatRoom, { chatroomID: roomId, sortDirection: "DESC" })
            ).then(result => { setMessages(result.data.listMessagesByChatRoom.items); })
        }

        const subscription = API.graphql(graphqlOperation(onCreateMessage)).subscribe({
            next: ({ value }) => {
                console.log('subcr', value)
                setMessages(m => [value.data.onCreateMessage, ...m])
            },
            error: (error) => console.log(error),
        });

        return () => subscription.unsubscribe();
    }, [roomId]);


    return { messages, setMessages };
};

export default useFetchMessagesByRoom; 
