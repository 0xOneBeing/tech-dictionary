import { Helmet } from "react-helmet";
import splash from "../../assets/images/splash.png";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <>
      <Helmet>
        <title>Tech Dictionary</title>
      </Helmet>
      <div className="p-6 h-full">
        <h1 className="text-3xl font-bold text-center">Tech Dictionary</h1>
        <SearchBar />
        <img src={splash} alt="Splash" className="w-80 mt-[40px] mx-auto" />
      </div>
    </>
  );
}

export default Home;
