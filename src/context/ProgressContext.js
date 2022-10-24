import { createContext, useState } from "react";

export const ProgressContext = createContext({});

export function ProgressContextProvider({children}) {
    const [todayList, setTodaylist] = useState([]);
    return(
        <ProgressContext.Provider value={{todayList, setTodaylist}}>
            {children}
        </ProgressContext.Provider>
    )
}