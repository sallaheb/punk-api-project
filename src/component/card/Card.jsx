import "./Card.scss";



const Card= (props) => {

  const {name, image, description} = props

  return (
    <div className="card">
      <img src= {image} alt="" className="card__image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;