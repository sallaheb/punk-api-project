import FilterItem from "../../component/filteritem/FilterItem";
import "./FilterList.scss"

const FilterList= (props) => {


  return (
    <div className="filter-list">
      <FilterItem text= {"abv"} setChecked ={props.setAbv} />
      <FilterItem text= {"classic Range"} setChecked={props.setClassic}/>
      <FilterItem text= {"Acidic"} setChecked = {props.setAcidic} />
    </div>
  );
}

export default FilterList;