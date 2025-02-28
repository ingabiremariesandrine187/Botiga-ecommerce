import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import '../styles/Homeproduct.css'
function Homeproduct() {
    const{register,handleSubmit}=useForm();
    const send=(data)=>
    {
        const{productTitle,images,productPrice,productContent}=data;
        const formData=new FormData();
        try{
       formData.append('productTitle' ,productTitle);
       formData.append('images' ,images[0]);
       formData.append('productPrice' ,productPrice);
       formData.append('productContent',productContent);
    const results= axios.post(`https://botiga-kvf9.onrender.com/product/createProduct`,formData,
    {
      header:{
         "content-Type":"multipart/form-data"
      }
    }

    )
        }

        catch(error){
            console(error);
        
        }
        }
   
  return (
    <div>
        <form class="forms" onSubmit={handleSubmit(send)}>
            <h1>fill this form</h1>
        <input type='text' placeholder='product Title' name='productTitle' class="input-title" {...register('productTitle' ,{required:true})}/>
        <input type='file' placeholder='product image' name='images' class="input-image" {...register('images',{required:true})}/>
        <input type='text' placeholder='product Content' name='productContent' class="input-content"{...register('productContent' ,{required:true})} />
        <input type='text' placeholder='product Price' name='productPrice' class="input-price"{...register('productPrice' ,{required:true})}/>
        <button type='submit'>create product</button>
        </form>
        </div>
  )
}
export default Homeproduct 