import "./Card.scss";



const Card= (props) => {

  const {nameofbeer, images} = props

  return (
    <div className="card">
      <img src= {images} alt="" className="card__image" />
      <h1>{nameofbeer}</h1>
      <p>Here is all the most important info about the beer</p>
    </div>
  );
}

export default Card;