import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Netflix Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Netflix Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Upcoming" fetchUrl={requests.fetchUpcomming} />
      <Row title="Netflix Populer" fetchUrl={requests.fetchPopular} />
      <Row title="Netflix Now Playing" fetchUrl={requests.fetchNowPlaying} />
      {/* <Row title="Netflix Lates" fetchUrl={requests.fetchLatest} /> */}
    </div>
  );
}

export default App;
