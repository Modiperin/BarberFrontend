// import { Link } from "react-router-dom"
import './card.css'
const Card = ({Class,image,children}) => {
  return (
    <>
    <article className={`card__salon ${Class}`}>

            <img  src={image} alt="Image1" className='card__service'/>
    
        {children}
    </article>
</>
  )
}

export default Card