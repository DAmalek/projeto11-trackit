import { createContext, useState } from "react";

export const ProgressContext = createContext({});

export function ProgressContextProvider({children}) {
    const [todayList, setTodaylist] = useState([]);
    const [taskdonePercent, setTaskdonePercent] = useState(0);
    return(
        <ProgressContext.Provider value={{taskdonePercent, setTaskdonePercent, todayList, setTodaylist}}>
            {children}
        </ProgressContext.Provider>
    )
}