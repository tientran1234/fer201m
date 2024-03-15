import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { getItemDetail } from '../../api/handleApi';
import Navbar from './Navbar';
 

function Detail() {
    const [data,setData]=useState();
    const id = useParams();
   
    useEffect(() => {
        const handleGetData=async()=>{
            const studentData=await getItemDetail(id.id);
            setData(studentData);
        }
      handleGetData()
    }, [data]);
  
  return (
   
    <div>
        {data?
        <>
         <Navbar/>
         <div className='container-detail'>
                <div style={{marginRight:"20px"}} className='product-tumb'>
                    <img style={{width:"100%"}} src={data.image} alt='' />
                </div>
           
                <div className='product-card'>
                    <div className='badge'>
                        <p> {data.name}</p>
                       </div>
                    <div className='product-details'>
                        <p><span>Description:</span> {data.description}</p>
                        <p><span>Price:</span> {data.price}</p>
                        <p><span>Rating:</span> {data.rating}</p>
                        <p><span>Category:</span> {data.category}</p>
                        <p><span>Bestseller:</span> {data.bestseller?"true":"false"}</p>
                        <div className="video" style={{height:"100px"}}>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>:<></>}
       
         
            
    </div>
  )
}

export default Detail
