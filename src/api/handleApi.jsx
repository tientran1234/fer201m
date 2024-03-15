

import axios from "axios"

export const getItem=async()=>{
    const res= await axios.get("https://65369b10bb226bb85dd267ab.mockapi.io/ticket/film")
    return res.data;
}
export const getItemDetail=async(itemId)=>{
    const res= await axios.get(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/film/${itemId}`)
    return res.data;
}
export const deleteItem=async(itemId)=> {
    try {
      const response = await axios.delete(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/film/${itemId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  export const updateItem= async (itemId, updatedItemData) => {
    try {
      const response = await axios.put(`https://65369b10bb226bb85dd267ab.mockapi.io/ticket/film/${itemId}`, updatedItemData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
   export const addItem= async (itemData) => {
      try {
        const response = await axios.post('https://65369b10bb226bb85dd267ab.mockapi.io/ticket/film',itemData );
        return response.data;
      } catch (error) {
        throw error;
      }
    }