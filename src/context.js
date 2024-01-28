import {useState,useContext,createContext} from 'react';

const AppContext = createContext()

const AppProvider = ({children}) => {
    
    
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    
    
    return <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar
    }}>
    {children}
    </AppContext.Provider>
}


const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }