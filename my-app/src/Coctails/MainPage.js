import axios from "axios"
import { useEffect, useState } from "react"
import Search_box from "./Search_box"
import Alphabet_box from "./Alphabet_box"
import {Box ,Typography, Stack ,Button, TextField } from "@mui/material";




export default function Coctails(props) {

    console.log('rendering Coctails')

    const [name, setName] = useState('')
    const [ButtonName, setButtonName] = useState(false)
    
    const [ButtonLetter, setButtonLetter] = useState(false)
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    return(
        <Box  sx={{
            width: '43%',
            margin: 'auto',
            marginTop: '1em'
        }}>
        <Stack  direction="row" justifyContent="center">
        <Typography variant="h4" gutterBottom>
        Welcome to Cocktails App!
      </Typography>
         
      </Stack>
         
      <br/>
      <Stack direction="row" justifyContent="center">
            <TextField 
         
                label="Search"
                variant="outlined"
                size="small"
                 value={name} 
            onChange={(event) => setName(event.target.value)}/>
         
       
        <Button  size="normal" variant="contained" color="primary" onClick={()=>setButtonName(name)}>
        search
        </Button>
        </Stack>
        {alphabet.map((letter) => (
        <Button onClick={()=>setButtonLetter(letter)} key={letter}>{letter}</Button>
         ))}
        {ButtonName &&
            <Search_box name={ButtonName}/>
            
        }
        
        {ButtonLetter &&
            <Alphabet_box letter={ButtonLetter}/>
            
      
        }
        </Box>
    )
}