import MainPanel from "./MainPanel";
import Topbar from "./Topbar";
import '../style/Home.css'

const Home = () => {
    return (
        <div className="home-style">
            <Topbar />
            <div className="flex-main-panel">
                <MainPanel />
            </div>
        </div>
    );
}

export default Home;