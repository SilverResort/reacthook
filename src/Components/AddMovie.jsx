import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const AddMovie = () => {
    const [addFilm,setAddFilm]=useState({
        id:0,
        posterUrl:"",
        title:"",
        description:"",
        trailer:"",
        rating:"",
    })

    const addmovie =()=>{
        setAddFilm(
            // id:document.getElementById("id").value
            // posterUrl:document.getElementById("posterUrl").value,
            // title:document.getElementById("titreduFilm").value,
            // description:document.getElementById("description").value,
            // trailer:document.getElementById("trailer").value,
            // rating:document.getElementById("rating").value,
        )
    }


    return (
    <div>
        <Form>
            <label for="id">id:</label>
            <input type="text" id="id" name="id"></input> <br></br>
            <label for="posterUrl"> Poster Url:</label>
            <input type="text" id="posterUrl" name="posterUrl"></input><br></br>
            <label for="titreduFilm">Titre du film:</label>
            <input type="text" id="titreduFilm" name="titreduFilm"></input><br></br>
            <label for="Trailer">Trailer du film:</label>
            <input type="text" id="trailer" name="trailer"></input><br></br>
            <label for="rating">Rating:</label>
            <input type="number" id="rating"></input><br></br>
            <label for="description">description:</label>
            <textarea id="description"></textarea><br></br>
            <input type="submit" value="Ajouter"></input>
        </Form>
        
        {/* id:
        title:
        rate:
        description:
        posterUrl:
        trailer: */}
    </div>
  )
}

export default AddMovie