import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false);
    return <AppContext.Provider value={{userLogged, setUserLogged}}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }

export { AppContext, AppProvider }  