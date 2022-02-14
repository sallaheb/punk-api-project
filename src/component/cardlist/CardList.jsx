import "./CardList.scss";
import Card from "../card/Card";
import React, {useState, useEffect} from "react";


const CardList= (props) => {

  const {abv, classic, acidic } = props;
  const {searchTerm} = props;

const [beers, setBeers] = useState(false);

const getData = () => {
  fetch("https://api.punkapi.com/v2/beers?page=1&per_page=6")
  .then(res => {
      return res.json()
  }).then(data => {
     setBeers(data)  
  })
}

useEffect(() => {
  return getData()
}, [])





 //// /////////////////////map over beers and return component of cards no filter///////////////////////////////

   
  const renderBeers = () => {
    return beers.map(beer => {
    return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
  })
}


 ////////filter and then map over filter to connect Search functionality and return component of card based on searchTerm state passed down as prop/////////////////////////////////////////////////////////////////////////
 
   const searchFilterTerm = () => {
     return beers.filter(beer => {
     return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
   })
  }

  const displayFunction = (arr) => {
   return arr.map((beer) => {
      return <Card name = {beer.name} tagline = {beer.tagline} image = {beer.image_url} />
     })
  }


////////filter and then map over filter to connect filter functionality and return component of card based on filter states passed down as prop/////////////////////



  const filterbyabv = () => {
     return beers.filter(beer=> {
     return beer.abv > 6; 
   })
  }

  const filterbyclassic = () => {
    return beers.filter(beer=> {
    return beer.first_brewed.split("/")[1] < 2010;
   })
  }

  const filterbyacidic = () => { 
    return beers.filter(beer=> {
    return beer.ph < 4;
  })
}




  return (
    <div className="cardlist">
     {beers && (acidic? displayFunction(filterbyacidic()):classic?displayFunction(filterbyclassic()):abv?displayFunction(filterbyabv()):searchTerm? displayFunction(searchFilterTerm()):renderBeers())}
    </div>
  );
}

export default CardList;