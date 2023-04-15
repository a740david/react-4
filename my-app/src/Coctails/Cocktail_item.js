import React from "react";
import{Typography,CardContent,CardMedia,CardActionArea,Card, Stack} from "@mui/material";
function ListItem(props) {
  return (
    <div>
     <Card  sx={{ maxWidth: 345}} >
      <CardActionArea>
           <CardContent >
           <CardMedia
          component="img"
          image={props.image}
          alt="green iguana"

        />
          
          <Typography>{props.category}</Typography>
          {props.strAlcoholic}<br/>
           {"Category: "+ props.category}<br/>
           {"Glass: "+ props.strGlass}<br/>
          {props.strInstructions}
      </CardContent>
   </CardActionArea>
   </Card>
    </div>
  );
}

export default ListItem;