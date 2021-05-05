import React,{useState} from "react";
import SearchIcon from "@material-ui/icons/Search";


function SearchBar(props) {
  
  const {onSubmit} = props
  const [searchValue,setSearchValue] = useState("")
  const handleChange =(e)=>{
      e.preventDefault();
      console.log(e.target.value)
      setSearchValue(e.target.value)
      onSubmit(searchValue)

  }
  return (
      <div className=" d-flex flex-row-reverse bd-highlight m-3">
        <form className="form-inline ">
        <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            <SearchIcon/>
        </button>
        </form>

      </div>
  );
}

export default SearchBar;
