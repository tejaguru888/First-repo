import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';

export default GalleryContext = createContext();

export const GalleryContext = ({children}) => {
    const API_KEY = '6f6f671764a404a963fff60a370eae42';
    const API_SECRET= 'a27270f1e63c0554';

    const [image, setImage] = useState([]);
    const [loading,  setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImages = async (query, category) => {
        setLoading(true);
        setError(null);

        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${query}&per_page=20&format=json&nocallback=1`;

        if(category) {
            url +=`&tags=${category}`;
        }
        try {
            const res = await axios.get(url);
            setImage(res.data.photos.photo);
        }catch(err) {
            setError(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchImages('nature');
    },[]);

    return (
        <GalleryContext.Provider value={{image, loading, error, fetchImages}}>
            {children}
        </GalleryContext.Provider>
    )
}