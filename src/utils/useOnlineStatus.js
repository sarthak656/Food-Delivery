import { useEffect,useState } from "react"

const useOnlineStatus = () => {
   const [isOnline, setIsonline] = useState(navigator.onLine); // Initialize with current status

    useEffect(()=>{
     window.addEventListener("online", ()=>{
            setIsonline(true);
     }) 
     window.addEventListener("offline",()=>{
        setIsonline(false)
     })
    },[])
    return isOnline;

}

export default useOnlineStatus



