import React, { useEffect, useState }from 'react'
import axios from '../api/axios'; 
import MovieModal from './MovieModal';
import "./Row.css"; 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default function Row({ title, fetchURL, isLargeRow, id }) {
  const [movies, setMovies] = useState([]); 
  const [modalOpen, setModalOpen] = useState(false); 
  const [movieSelected, setMovieSelected] = useState({}); 
  
  useEffect(() => {
    fetchMovieData(); 
  }, [fetchURL]);
  
  const fetchMovieData = async () => {
    const request = await axios.get(fetchURL); 
    console.log('request', request); 
    setMovies(request.data.results);
    return request;  
  }

  const handleClick = (movie) => {
    setModalOpen(true); 
  }
  
  return (
    <section className='row'>
      <h2>{title}</h2> 

      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}  
        navigation
        pagination={{ clickable: true }} 
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView:6, 
            slidesPerGroup: 6, 
          },
          998: {
            slidesPerView:5, 
            slidesPerGroup:5, 
          }, 
          625: {
            slidesPerView:4, 
            slidesPerGroup:4,
          }, 
          0:{
            slidesPerView:3, 
            slidesPerGroup:3,
          }
        }}
      >

        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide>
                <img 
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)}
                />
            </SwiperSlide>
          ))}
        </div>

      </Swiper>

    </section>
  )
}
