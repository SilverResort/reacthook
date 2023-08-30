import { Button } from 'react-bootstrap';
import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import AddMovie from './AddMovie';


const MovieCard = ({data}) => {

    const[show,setShow]=useState(false)

    const trigger =()=>{
      setShow(!show)
    }

    return (
        <div>
            <div className="cartefilm" style={{color:"red", textAlign:'center'}}> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={data.posterUrl} />
                    <Card.Body>
                        <Card.Title>Title : {data.title}</Card.Title>
                        <Card.Title>Description : {data.description}</Card.Title>
                        <Card.Text>Trailer : 
                            <iframe title="Trailer" /*of ${data.title}*/ width="260" height="auto" src={data.trailer}></iframe>
                        </Card.Text>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <ReactStars count={5} value={data.rate} size={24} color2={'#ffd700'} edit={false} />
                        </div>
                        <Card.Text>Id : {data.id}</Card.Text>
                    </Card.Body>
                </Card>
                {show? <AddMovie />:null}
                <Button onClick={()=>trigger()}>{show? `Annuler l'ajout du film`:`Ajouter un film`}</Button>
            </div>
        </div>
    )
}
// id,title,description,posterUrl,trailer,rating

MovieCard.defaultProps = {
    id: "Id du Film",
    title: "Titre du film",
    description: "Description du film",
    posterUrl:"Poster URL du film",
    trailer: "Trailer du film",
    rating: 1.5
};

export default MovieCard
