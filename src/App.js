
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import './App.css';
function App(){


    const [imageUrls , setImageUrls] = useState([]);

    const handleSubmit = async (term) =>{
  
    const result = await searchImages(term);

     
    setImageUrls(result);


    }

    return <div className="container">

        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={imageUrls} />
    </div>
}


export default App;