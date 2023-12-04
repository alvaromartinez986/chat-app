import React from 'react';
import useFetchRoom from '../hooks/useFetchRoom';
import useSetUser from '../hooks/useSetUser';



const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const { user } = useSetUser();
    const { room } = useFetchRoom();

    const selectedStateObj = { user, room };

    return (
        <AppContext.Provider value={selectedStateObj}>{children}</AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('AppContext must be used within a AppContext');
    }
    return context;
};

export {
    AppContext,
    useAppContext,
    AppProvider
};
