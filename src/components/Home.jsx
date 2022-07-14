import MainPanel from "./MainPanel";
import Topbar from "./Topbar";
import '../style/Home.css'

const Home = () => {
    return (
        <div className="home-style">
            <Topbar />
            <h1>Todo App</h1>
            <div className="flex-main-panel">
                <MainPanel />
            </div>
        </div>
    );
}

export default Home;