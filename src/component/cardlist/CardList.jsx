import "./CardList.scss";
import Card from "../card/Card";
import beers from "../../../src/data/beers";

const beerName = beers.map(beer => beer.name).slice(0,7);
const beerDescription = beers.map(beer => beer.description).slice(0,7);
const beerImages = beers.map(beer => beer.image_url).slice(0,7);


//images nameofbeer, description//

const CardList= () => {


  return (
    <div className="cardlist">
      <Card  nameofbeer= {beerName[0]} description= {beerDescription[0]} images={beerImages[0]}/>
      <Card nameofbeer= {beerName[1]} description= {beerDescription[1]} images={beerImages[1]}/>
      <Card nameofbeer= {beerName[2]} description= {beerDescription[2]} images={beerImages[2]}/>
      <Card nameofbeer= {beerName[3]} description= {beerDescription[3]} images={beerImages[3]}/>
      <Card nameofbeer= {beerName[4]} description= {beerDescription[4]} images={beerImages[4]}/>
      <Card nameofbeer= {beerName[5]} description= {beerDescription[5]} images={beerImages[5]}/>


    </div>
  );
}

export default CardList;