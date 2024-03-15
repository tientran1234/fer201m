import React,{useState} from 'react'
import {AppBar, Button} from '@mui/material'
import {Toolbar,Tabs,Tab} from '@mui/material'
import { Link } from 'react-router-dom';


function Navbar() {
  
  const [value, setValue] = useState(0);
    return(
        <div>
          
        <AppBar sx={{background:"#063970"}} >
            <Toolbar>
                <Tabs   textColor="inherit" value ={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
                    
                    <Link to="/" style={{textDecoration:"none"}}>
                    <Button variant='contained' color="error" sx={{marginLeft:"auto"}}>Home</Button>
                    </Link>
               

                   <Link to="/dashboard" style={{textDecoration:"none",color:"white"}}>
                   <Tab label ="Dashboard"/>
                     </Link>
                     
                    <Tab label ="Top News"/>
                    <Tab label ="Contact"/>
                    
                    

                </Tabs>
                <Button variant='contained' color="error" sx={{marginLeft:"auto"}}>Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}


export default Navbar;
