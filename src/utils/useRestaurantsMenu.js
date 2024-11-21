import { useEffect, useState } from "react";
import { RES_URL } from "./constants";

const  useRestaurantsMenu = (resId) => {
const [resinfo, setResinfo] = useState(null);
    useEffect(() => {
        fetchData();
      }, [resId]);

     const fetchData = async () => {
       try {
        const response = await fetch(RES_URL+resId);
        const json = await response.json();
        setResinfo(json.data);
         } catch (err) {
          console.log(err);
        }
    };

   return resinfo; 
}

export default useRestaurantsMenu
