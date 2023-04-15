
import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import{MyIcon,Box,Typography,CardContent,CardMedia,CardActionArea,Card, Stack, Button} from "@mui/material";
import Cocktail_item from './Cocktail_item';
export default function CoctailsByLetter(props) {

    const [coctails, setCoctails] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(
            () => {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + props.letter)
            .then((response) => {
                console.log(response.data)
            
                setCoctails(response.data.drinks)
                setErrorMessage('No results found for ' )   
            }) 
        },
            
            [props.letter]
        )
        const [selectedCard, setSelectedCard] = useState(null);

       const handleCardClick = (index) => {
       setSelectedCard(index);
     };
        return (
            <>
            <Stack  direction="row" justifyContent="center" >
 
          <Card sx={{ maxWidth: 345}} >
            
           {coctails?(props.letter && coctails.length > 0 &&
                <Typography>{coctails.map((coctail,index) => {
                   
    
               return(
                <div key={index} onClick={() => handleCardClick(index)}>
                <Stack display="flex" justifyContent="center" alignItems="center" >
                <Button   onClick={()=>setIsOpen(!isOpen)}> 
                 <span>{coctail.strDrink}</span>
              </Button>
              </Stack>
                <div style={{ display: isOpen ? "block" : "none" }}>
                {selectedCard===index&&
                    <Cocktail_item image={coctail.strDrinkThumb}
                     strAlcoholic={coctail.strAlcoholic} 
                     category={coctail.strCategory}
                     strGlass={coctail.strGlass}
                     strInstructions={coctail.strInstructions}
                     />
                }
                </div>
            
             </div>
               )
                })}
                </Typography>
                
                ):(
            <Typography>{errorMessage}</Typography>
          
           )}
              
            </Card>
            </Stack>
            </>
        )
    }