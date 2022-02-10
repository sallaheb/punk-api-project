import "./Searchbox.scss";


const Searchbox= (props) => {
  const {searchTerm} = props 

  return (
    <form className="search-box">
      <label htmlFor="Beers"></label>
      <input type="text" value={searchTerm} />
    </form>
  );
}

export default Searchbox;