import FilterItem from "../../component/filteritem/FilterItem";
import "./FilterList.scss"

const FilterList= (props) => {


  return (
    <div className="filter-list">
      <FilterItem text= {"High Abv (> 6.0%)"} setChecked= {props.setAbv} />
      <FilterItem text= {"Classic Range"} setChecked= {props.setClassic}/>
      <FilterItem text= {"Acidic (ph < 4)"} setChecked= {props.setAcidic} />
    </div>
  );
}

export default FilterList;