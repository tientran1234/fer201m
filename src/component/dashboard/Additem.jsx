import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2';
import { addItem } from '../../api/handleApi';
import Navbar from '../home/Navbar';
import { useNavigate } from 'react-router-dom';

function AddItem({ closeEvent, handleFlagChange, data }) {
    //     const navigate=useNavigate();
    //   const [name, setName] = useState('');
    //   const [image, setImage] = useState('');
    //   const [feedback, setFeedback] = useState('');
    //   const [gender, setGender] = useState('');
    //   const [sclass, setSclass] = useState('');
    //   const [dateOfBirth, setDateOfBirth] = useState(''); q

    //   const [nameError, setNameError] = useState(null);
    //   const [imageError, setImageError] = useState(null);
    //   const [feedbackError, setFeedbackError] = useState(null);
    //   const [genderError, setGenderError] = useState(null);
    //   const [classError, setClassError] = useState(null);
    //   const [dobError, setDobError] = useState(null);



    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [category, setCategory] = useState('');
    const [bestseller, setBestSeller] = useState('');

    const [nameError, setNameError] = useState('');
    const [imageError, setImageError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [ratingError, setRatingError] = useState('');
    const [categoryError, setCategoryError] = useState('');
    const [bestSellerError, setBestSellerError] = useState('');
   







    //   const validateName = () => {
    //     if (!name || name.split(' ').length < 2) {
    //       setNameError("Name must contain at least two words");
    //       return false;
    //     }
    //     setNameError(null);
    //     return true;
    //   };

    //   const validateImage = () => {
    //     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    //     if (!image || !urlRegex.test(image)) {
    //       setImageError("Invalid URL format");
    //       return false;
    //     }
    //     setImageError(null);
    //     return true;
    //   };

    // const validateFeedback = () => {
    //     if (!feedback) {
    //         setFeedbackError("Feedback is required");
    //         return false;
    //     }
    //     setFeedbackError(null);
    //     return true;
    // };


    // const validateGender = () => {
    //     if (gender !== 'True' && gender !== 'False') {
    //         setGenderError("Invalid gender value");
    //         return false;
    //     }
    //     setGenderError(null);
    //     return true;
    // };

    // const validateClass = () => {
    //     if (!sclass) {
    //         setClassError("Class is required");
    //         return false;
    //     }
    //     setClassError(null);
    //     return true;
    // };

    // const validateDob = () => {
    //     //'date-fns'
    //     if (!dateOfBirth) {
    //         setDobError("Date of Birth is required");
    //         return false;
    //     }
    //     setDobError(null);
    //     return true;
    // };

    // const validateForm = () => {
    //     const isNameValid = validateName();
    //     const isImageValid = validateImage();
    //     const isFeedbackValid = validateFeedback();
    //     const isGenderValid = validateGender();
    //     const isClassValid = validateClass();
    //     const isDobValid = validateDob();

    //     return isNameValid && isImageValid && isFeedbackValid && isGenderValid && isClassValid && isDobValid;
    // };

    const addItemId = () => {
        // if (validateForm()) {
        const itemData = {
            name,
            price,
            description,
            rating,
            category,
            image,
            bestseller
        };

        Swal.fire({
            title: "Are you sure?",
            text: "You want to add a new home!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "blue",
            cancelButtonColor: "red",
            confirmButtonText: "Yes, add it!",
        }).then((result) => {
            if (result.value) {
                addItem(itemData)
                    .then(() => {

                        Swal.fire("Added!", "Your home has been added.", "success");
                        setTimeout(() => navigate("/dashboard"), 3000)
                    })
                    .catch((error) => {
                        console.error("Error adding a home:", error);
                        Swal.fire("Error", "An error occurred while adding the home.", "error");
                    });
            }
        });
        // } else {
        //   Swal.fire("Error", "Please fill in all the required fields correctly.", "error");
        // }
    };

    return (
        <div>
            <Navbar />
            <h1>Add new home</h1>
            <Box sx={{ m: 2 }}></Box>
            <Typography variant='h5' align='center'></Typography>
            <IconButton
                style={{ position: "absolute", top: 0, right: 0 }}
                onClick={closeEvent}
            >
                <CloseIcon />
            </IconButton>
            <Grid container spacing={2}>

                <Grid item xs={6} md={3}>
                    <TextField
                        required
                        id="outlined-required"
                        label="NAME"
                        sx={{ minWidth: "100%" }}
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameError(null);
                        }}
                        error={nameError ? true : false}
                        helperText={nameError}
                    />

                </Grid>

                <Grid item xs={6}>
                    <TextField
                        required
                        id="outlined-required"
                        sx={{ minWidth: "100%" }}
                        label="IMAGE"
                        onChange={(e) => {
                            setImage(e.target.value);
                            setImageError(null);
                        }}
                        error={imageError ? true : false}
                        helperText={imageError}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        required
                        id="outlined-required"
                        sx={{ minWidth: "100%" }}
                        label="Price"
                        onChange={(e) => {
                            setPrice(e.target.value);
                            setPriceError(null);
                        }}
                        error={priceError ? true : false}
                        helperText={priceError}
                    />
                </Grid>
                <Grid item xs={9}>
                    <TextField
                        required
                        id="outlined-required"
                        sx={{ minWidth: "100%" }}
                        label="Description"
                        onChange={(e) => {
                            setDescription(e.target.value);
                            setDescriptionError(null);
                        }}
                        error={descriptionError ? true : false}
                        helperText={descriptionError}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        required
                        id="outlined-required"
                        sx={{ minWidth: "100%" }}
                        label="Rating"
                        onChange={(e) => {
                            setRating(e.target.value);
                            setRatingError(null);
                        }}
                        error={ratingError ? true : false}
                        helperText={ratingError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        sx={{ minWidth: "100%" }}
                        label="Category"
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setCategoryError(null);
                        }}
                        error={categoryError ? true : false}
                        helperText={categoryError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="outlined-required"
                        sx={{ minWidth: "100%" }}
                        label="Bestseller"
                        onChange={(e) => {
                            setBestSeller(e.target.value);
                            setBestSellerError(null);
                        }}
                        error={bestSellerError ? true : false}
                        helperText={bestSellerError}
                    />
                </Grid>

            </Grid>
            <div style={{ marginTop: 10 }}>
                <Button variant="contained" onClick={addItemId}>Add New</Button>
            </div>
        </div>
    );
}

export default AddItem;
