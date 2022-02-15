import Searchbox from "../../component/searchbox/Searchbox";
import FilterList from "../filterlist/FilterList";
import "./Nav.scss";


const Nav= (props) => {
  return (
    <div className="nav">
      <Searchbox setSearchTerm={props.setSearchTerm}/>
      <FilterList setAcidic={props.setAcidic} setAbv={props.setAbv} setClassic={props.setClassic}/>
    </div>
  );
}

export default Nav;