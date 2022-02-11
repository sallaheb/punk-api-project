import "./CardList.scss";
import Card from "../card/Card";
import beers from "../../../src/data/beers";



const CardList= (props) => {

  ////fetching Api/////
  

  const {abv, classic, acidic } = props;
  const {searchTerm} = props;


  /////////////////////map over beers and return component of card////////////////////

  const renderBeers = beers.map(beer => {
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
  })

 ////////filter and then map over filter to connect Search functionality and return component of card based on searchTerm state passed down as prop/////////////////////
 
  const searchFilterTerm =
   beers.filter(beer => {
     return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
   })
 
   const displayFilteredTerm =
   searchFilterTerm.map(beer => {
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url}
    />
   })

////////filter and then map over filter to connect filter functionality and return component of card based on filter states passed down as prop/////////////////////


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
     {acidic?displayacidic:classic?displayclassic:abv?displayabv:searchTerm? displayFilteredTerm:renderBeers}
    </div>
  );
}

export default CardList;