import { BiSearchAlt } from 'react-icons/bi';


const Search = () => {
    return ( 
        <div className="row search" id="search">
            <div className="col-6">
                <input type="text" className="form-control" placeholder="Search here"/>
            </div> 
            <div className="col">
                <a className="btn" href=""><BiSearchAlt size={20}/></a>
            </div>
        </div>
     );
}
 
export default Search;