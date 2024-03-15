import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useEffect,useState} from 'react'

import { getItem } from '../../api/handleApi';
import { Link } from 'react-router-dom';
export default function ListItem() {
  const [dataList,setDataList]=useState([]);

  useEffect(() => {
   getItem().then((data)=>{
    setDataList(data);
   })

  }, []);
  const newData =dataList.filter((item)=>item.bestseller==true)
  console.log(dataList);
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridGap:"20px",margin:"100px"}}>
      {newData.map((item)=>(
          <Card sx={{ maxWidth: 345 }}>
     
          <CardActionArea>
            <CardMedia 
            style={{width:"100%",height:"200px"}}
              component="img"
             
              width="100%"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
               {item.price}
              </Typography>

              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              
              <Typography variant="body2" color="text.secondary">
               {item.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {item.category}
              </Typography>
             
            </CardContent>
          </CardActionArea>
          <CardActions>

            <Link to ={`detail/${item.id}`}>
            <Button size="small" color="primary">
              Detail
            </Button>
            </Link>
           
          </CardActions>
        </Card>
        ))} 
       
   
    </div>
   
  );
}
