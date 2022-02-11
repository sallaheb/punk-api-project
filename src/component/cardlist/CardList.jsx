import "./CardList.scss";
import Card from "../card/Card";
import beers from "../../../src/data/beers";

const beerName = beers.map(beer => beer.name).slice(0,7);
const beerDescription = beers.map(beer => beer.description).slice(0,7);
const beerImages = beers.map(beer => beer.image_url).slice(0,7);


//images nameofbeer, description//

const CardList= (props) => {

  const {abv, classic, acidic } = props;
  
  const {searchTerm} = props;

  const renderBeers = beers.map(beer => {
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
  })
 const searchFilterTerm =
   beers.filter(beer => {
     return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
   })
 
   const displayFilteredTerm =
   searchFilterTerm.map(beer => {
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url}
    />
   })
   const filterbyabv = beers.filter(beer=> {
     return beer.abv > 6; 
   })

   const displayabv = filterbyabv.map(beer=>{
     return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
   })


   const filterbyclassic = beers.filter(beer=> {
    return beer.first_brewed.split("/")[1] < 2010;
  })

  const displayclassic = filterbyclassic.map(beer=>{
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
  })


  const filterbyacidic = beers.filter(beer=> {
    return beer.ph < 4;
  })

  const displayacidic = filterbyacidic.map(beer=>{
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
  })


  return (
    <div className="cardlist">
     {acidic?displayacidic:classic?displayclassic : abv?displayabv : searchTerm ? displayFilteredTerm : renderBeers}


    </div>
  );
}

export default CardList;