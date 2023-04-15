import axios from "axios"
import { useEffect, useState } from "react"
import{Typography,CardContent,CardMedia,CardActionArea,Card, Stack} from "@mui/material";

export default function CoctailsByLetter(props) {


    const [coctails, setCoctails] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    

    useEffect(
            () => {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + props.name)
            .then((response) => {
                console.log(response.data)
            
                setCoctails(response.data.drinks)

                setErrorMessage('No results found for ' )    
                
            })
            .catch((error)=>{
                console.log(error);
            });
        },
            
            [props.name]
        )
        
    return (
        <>
        <Stack  direction="row" justifyContent="center" >
        <p>Now loading coctails for {props.name}</p>
        </Stack>
        <Stack  direction="row" justifyContent="center" >
      <Card  sx={{ maxWidth: 345}} >
        
         {coctails?(props.name && coctails.length > 0 &&
            <Typography>{coctails.map((coctail,index) => {
               

           return(
           <div key={index}>
           
           <CardActionArea>
           <CardContent >
           <CardMedia
          component="img"
          image={coctail.strDrinkThumb}
          alt="green iguana"

        />
          
          <Typography >
          {coctail.strAlcoholic}<br/>
           {"Category: "+ coctail.strCategory}<br/>
           {"Glass: "+ coctail.strGlass}<br/>
          {coctail.strInstructions}
          
          </Typography>
          
          </CardContent>
          </CardActionArea>
            </div>
            )}
            )
            }
            </Typography>
            ):(
            <p>{errorMessage}</p>
          
           )
        }
        
        </Card>
        
        </Stack> 
        </>
    )
}