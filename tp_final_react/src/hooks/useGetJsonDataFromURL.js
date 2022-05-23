import {useState, useEffect} from 'react';
import axios from 'axios';

export const useGetJsonDataFromURL = (url) => {
  const [data, setData] = useState({
                                    loading: true,
                                    error: null,
                                    data: null
                                  });
  
  // petición a la api solo cuando se carga la página  
  useEffect(() => {getData();});
    
  //función para manejar la petición
  const getData = async () => {
    try{
      const rta = await axios(url);
      setData({...data, loading: false, data: rta});
    } 
    catch (e) {
      setData({...data, loading: false, error: e});
      console.log(e);
    }
  };
    
  return [data.data, data.loading, data.error];
}
