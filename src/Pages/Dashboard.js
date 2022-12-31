import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import Recent from "../Components/Recent";
import Search from "../Components/Search";
import Videos from "../Components/Videos";

const Dashboard = () => {
    return ( 
        <div>
            <Navigation/>
            <Search/>
            <Recent/>
            <Videos/>
            <Footer/>
        </div>
     );
}
 
export default Dashboard;