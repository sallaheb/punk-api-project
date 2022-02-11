import "./Main.scss";
import CardList from "../../component/cardlist/CardList";



const Main= (props) => {
  return (
    <div className="main">
      <CardList searchTerm = {props.searchTerm} abv={props.abv} classic={props.classic} acidic={props.acidic}/>
    </div>
  );
}

export default Main;