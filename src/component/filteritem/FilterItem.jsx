import "./FilterItem.scss";

const FilterItem= (props) => {
 
  const handleCheck = (event) => {
    if(event.target.checked) {
      props.setChecked(true)
    }
    else {
      props.setChecked(false)
    }
  }

  return (
    <div className="filter-item">
      <h2>{props.text}</h2>
      <input type="checkbox" onChange={handleCheck} />
    </div>
  );
}

export default FilterItem;