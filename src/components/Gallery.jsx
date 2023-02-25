import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {GalleryContext} from '../Context/GalleryContext';

function Gallery(props) {
    const [images, setImages] = useState([]);
    const {searchQuery} = useContext(GalleryContext);

    useEffect(() => {
        let apiUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
        let apiKey = "6f6f671764a404a963fff60a370eae42";
        let category = props.category;

        if(category) {
            apiUrl += `&tags=${category}`;
        }

        if(searchQuery) {
            apiUrl += `&text=${searchQuery}`;
        }

        apiUrl += `&api_key=${apiKey}&per_page=205format=json&nojsoncallback=1`;

        axios
        .get(apiUrl)
        .then((res) => {
            setImages(res.data.photos.photo)
        })
        .catch((err) => {
            console.log(err);
        });

    },[searchQuery, props.category]);

    return (
        <div>
            {images.map((image) => {
                <img
                key={image.id}
                src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
                alt={image.title} 
                />
            })}
        </div>
    );
}

export default Gallery;