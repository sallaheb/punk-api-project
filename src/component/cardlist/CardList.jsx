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
    return <Card name = {beer.name} description = {beer.description} image = {beer.image_url} />
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
      return <Card name = {beer.name} description = {beer.description} image = {beer.image_url} />
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



const multipleSelection = () => {
  let firstCondition=[];
  let secondCondition=[];
  let thirdCondition=[];

 if(classic && acidic && abv) {
  firstCondition = displayFunction(filterbyclassic());
  secondCondition =  displayFunction(filterbyacidic());
  thirdCondition = displayFunction(filterbyabv());
  return [secondCondition, firstCondition, thirdCondition]
} else if(classic && acidic) {
  firstCondition = displayFunction(filterbyclassic());
  secondCondition =  displayFunction(filterbyacidic());
  return [secondCondition, firstCondition]
} else if(classic && abv) {
  firstCondition = displayFunction(filterbyclassic());
  thirdCondition = displayFunction(filterbyabv());
  return [firstCondition, thirdCondition]
}else if (abv && acidic) {
  secondCondition =  displayFunction(filterbyacidic());
  thirdCondition = displayFunction(filterbyabv());
  return [secondCondition, thirdCondition]
} else if (abv) {
  return displayFunction(filterbyabv());
} else if (classic) {
  return displayFunction(filterbyclassic())
} else if (acidic) {
  return displayFunction(filterbyacidic());
} else if(searchTerm) {
  return displayFunction(searchFilterTerm());
} else {
  return renderBeers()
}
}

  return (
    <div className="cardlist">
      {beers && multipleSelection()}
    </div>
  );
}

export default CardList;