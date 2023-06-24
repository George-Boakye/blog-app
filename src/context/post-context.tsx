import React, {useState} from "react";
import {data as json} from "../../data.ts";
import {IData} from "../pages/Home.tsx";

export const PostContext:React.Context<React.ComponentState> = React.createContext(null);

interface PostProviderProps{
    children:React.ReactNode
}

export default function PostProvider({children}:PostProviderProps) {
    const [data, setData]  = useState<IData[]>(json)
return  <PostContext.Provider value={[data, setData]}>{children}</PostContext.Provider>
}
