import "./Card.scss";



const Card= (props) => {

  const {name, image, tagline} = props

  return (
    <div className="card">
      <img src= {image} alt="" className="card__image" />
      <h1>{name}</h1>
      <p>{tagline}</p>
    </div>
  );
}

export default Card;