import { useEffect } from "react";

const useTitle = (title)=>{
    useEffect(()=>{
        document.title =`Cocktail & Dreams - ${title}`
    },[title])
}

export default useTitle;