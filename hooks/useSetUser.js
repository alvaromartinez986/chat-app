import {
    Amplify,
    Auth,
    API,
    graphqlOperation,
} from "aws-amplify";
import awsconfig from "../src/aws-exports";

import { useEffect, useState } from "react";
import { getUser } from "../src/graphql/queries";
import { createUser } from "../src/graphql/mutations";

Amplify.configure({
    ...awsconfig,
    Analytics: { disabled: true },
});

function useSetUser() {

    const [user, setUser] = useState();

    useEffect(() => {
        const syncUser = async () => {
            const authUser =
                await Auth.currentAuthenticatedUser({
                    bypassCache: true,
                });
            const userData = await API.graphql(
                graphqlOperation(getUser, {
                    id: authUser.attributes.sub,
                })
            )

            if (userData.data.getUser) {
                setUser(userData.data.getUser)
                return;
            }


            const newUser = {
                id: authUser.attributes.sub,
                name: authUser.attributes.email,
            };

            const newUserResponse = await API.graphql(
                graphqlOperation(createUser, {
                    input: newUser
                })
            );

            setUser(newUserResponse);
        };

        syncUser();
    }, []);


    return { user }
}


export default useSetUser; 