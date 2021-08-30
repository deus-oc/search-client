import React, { useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";
import { SearchOptions } from './SearchOptions';
import { Content } from './Content';
import axios from 'axios'

// let cancelToken;
const SearchBar = () => {
  // when we want to display options 
  const [searchData, setSearchData] = useState("");
  const [options, setOptions] = useState([]);
  const [apiHit, setApiHit] = useState(false);
  const [displayData, setDisplayData] = useState();

  let cancelToken;
  const getSearchOptions = async (q) => { 
    q = q.trim();
    if(q.length !== 0){
    //Check if there are any previous pending requests
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel()
      }
      //Save the cancel token for the current request
      cancelToken = axios.CancelToken.source()
      let config = {cancelToken: cancelToken.token}

      try{
        const res = await axios.get(`https://sample-search-app.herokuapp.com/search?q=${q}`,config);
        setOptions(res.data.data);
        setSearchData(q);
        setApiHit(true);
      } catch (err) {
        console.log(err);
      }  
    } else setApiHit(false);
  }

  const handleSearch = async (e) => {
    await getSearchOptions(e.target.value);
  }

  const clickedOptions = async (_id) => {
    setApiHit(false);
    try{  
      const res = await axios.get(`https://sample-search-app.herokuapp.com/search/${_id}`)
      setDisplayData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }  

  return (
    <div className="global-div">
      <div className="search-div">
        <TextField id="searchBox" placeholder="Search Company" variant="outlined"
      onChange={handleSearch} fullWidth
      inputProps={{style: {fontFamily: "cursive"}}} 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}/>
      </div>
      {apiHit ? <SearchOptions options={options} clickedOptions={clickedOptions}  searchStr={searchData}/> : <Content data={displayData} />}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="search-container">
        <SearchBar />
      </div>
    </div>
  );
}
export default App;
