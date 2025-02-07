import React from 'react'
import '../styles/Home.css';
import Image1 from '../assets/Images/First one.webp';
import Image2 from '../assets/Images/second one.webp';
import {useNavigate} from 'react-router-dom'
export const productlist = [
{
id:1,
image:Image1,
cardTitle:'oil'
},
{
    id:2,
    image:Image2,
    cardTitle:'sugar'
    },
]
function Homepage() {
    const navigation = useNavigate();
    const handleNavigate=(id) => {
        navigation(`/singlecard/${id}`)
    }
  return (
    <div class="image-container">
{productlist.map((item ) => (
<div className='cont'key={item.id}>
<div><img src={item.image}/></div>
<div>{item.cardTitle}</div>
<button type='button'onClick={() =>handleNavigate(item.id)}>View</button>
</div>




))}



    </div>
  )
}
export default Homepage;