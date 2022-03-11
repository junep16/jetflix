import './App.css';
import Navigation from './components/Navigation';
import Banner from "./components/Banner"; 
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={Request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchURL={Request.fetchTrending}/>
      <Row title="Top Rated" id="TR" fetchURL={Request.fetchTopRated}/>
      <Row title="Action Movies" id="AM" fetchURL={Request.fetchActionMovies}/>
      <Row title="Comedy Movies" id="CM" fetchURL={Request.fetchComedyMovies}/>
    </div>
  );
}

export default App;
