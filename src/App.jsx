import './App.scss';
import Main from "./container/main/Main";
import Nav from "./container/nav/Nav";
import { useState } from 'react';



const App = () => {

  const [searchTerm, setSearchTerm]= useState("");
  
  const [abv, setAbv] = useState(false);
  const [classic, setClassic] = useState(false);
  const [acidic, setAcidic] = useState(false);


  return (
    <div className="App">
      <Main searchTerm= {searchTerm} abv={abv} classic={classic} acidic={acidic} />
      <Nav setSearchTerm={setSearchTerm} setAbv={setAbv} setClassic={setClassic} setAcidic={setAcidic}/>
    </div>
  );
}

export default App;
