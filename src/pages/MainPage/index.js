import React from "react"; 
import Row from "../../components/Row"; 
import Banner from "../../components/Banner"; 
import requests from "../../api/requests"; 


const MainPage = () => {
  return (
    <div>
      <Banner/> 
      <Row
        title = "NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row 
        title="Trending Now"
        id="TN"
        fetchURL={requests.fetchTrending}
      /> 
      <Row 
        title="Top Rated"
        id="TR"
        fetchURL={requests.fetchTopRated}
      /> 
      <Row 
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
      /> 
      <Row 
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
      />
      <Row 
        title="Horror Movies"
        id="HM"
        fetchURL={requests.fetchHorrorMovies}
      /> 
      <Row 
        title="Romance Movies"
        id="RM"
        fetchURL={requests.fetchRomanceMovies}
      />
      <Row 
        title="Documentaries"
        id="DM"
        fetchURL={requests.fetchDocumentaries}
      />  
    </div>
  )
}
export default MainPage; 
