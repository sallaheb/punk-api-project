import "./Searchbox.scss";


const Searchbox= (props) => {
  const {setSearchTerm} = props 

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
}


  return (
    <form className="search-box">
      <label htmlFor="Beers"></label>
      <input type="text" onInput={handleInput} />
    </form>
  );
}

export default Searchbox;