import React, { useState,useEffect } from 'react';
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import {  getItemDetail, updateItem } from '../../api/handleApi';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../home/Navbar';


function EditItem() {
    const {id}=useParams();
    const navigate=useNavigate();
    const [data, setData] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [category, setCategory] = useState('');
    const [bestseller, setBestSeller] = useState('');
  

    const itemData = {
        name,
        price,
        description,
        rating,
        category,
        image,
        bestseller
    };

   
  
  useEffect(() => {
   getItemDetail(id).then((data)=>{
    setName(data.name);
    setImage(data.image);
    setPrice(data.price);
    setDescription(data.description);
    setRating(data.rating);
    setCategory(data.category);
    setBestSeller(data.bestseller);
   });
  }, [id]);

  const validateForm = () => {
    if (name.split(' ').length < 2) {
      Swal.fire('Error', 'Name must have more than 2 words.', 'error');
      return false;
    }
    if (!isValidUrl(image)) {
      Swal.fire('Error', 'Image must be a valid URL.', 'error');
      return false;
    }
    if (gender !== 'true' && gender !== 'false') {
      Swal.fire('Error', 'Invalid gender. Please choose true(Male) or false(Female).', 'error');
      return false;
    }
   

    return true;
  };
  const isValidUrl = (url) => {
   
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };
  const editItem = () => {
 
    
    
    // if (!validateForm()) {
    //     return;
    //   }
    
        Swal.fire({
          title: "Are you sure?",
          text: "You want to add a new user!",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "blue",
          cancelButtonColor: "red",
          confirmButtonText: "Yes, add it!",
        }).then((result) => {
          if (result.isConfirmed) {
           updateItem(id,itemData)
              .then(() => {
                
                Swal.fire("Added!", "Your item has been edit.", "success");
                setTimeout(()=>navigate("/dashboard"),3000)
              })
              .catch((error) => {
                console.error("Error editing a item:", error);
                Swal.fire("Error", "An error occurred while editing the item    .", "error");
              });
          }
        });
      }
    

  return (
    <div>
     <Navbar/>
        {name?<>
            <h1>Edit Item</h1>
      <Box sx={{ m: 2 }}></Box>
      <Typography variant='h5' align='center'></Typography>
  
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            required
            label="Name"
            sx={{ minWidth: "100%" }}
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Image"
            sx={{ minWidth: "100%" }}
            defaultValue={image}
            onChange={(e) => setImage(e.target.value)}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Price"
            sx={{ minWidth: "100%" }}
            defaultValue={price}
            onChange={(e) => setPrice(e.target.value)}
           
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="description"
            sx={{ minWidth: "100%" }}
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Category"
            sx={{ minWidth: "100%" }}
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
          
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Rating"
            sx={{ minWidth: "100%" }}
            defaultValue={rating}
            onChange={(e) => setRating(e.target.value)}
          
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            label="Bestseller"
            sx={{ minWidth: "100%" }}
            defaultValue={bestseller}
            onChange={(e) => setBestSeller(e.target.value)}
          
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={editItem}>
        Edit
      </Button>
        </>:""}
      
    </div>
  );
}

export default EditItem;
