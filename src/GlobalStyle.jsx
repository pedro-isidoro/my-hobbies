import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        font-size: 10px;
    }
    
    ul li, a{
        text-decoration: none;
        list-style: none;
    }

    body{
        overflow-x: hidden;
    }

    & .viewedMovies .movie-slider,
  .viewedSeries .serie-slider,
  .viewedAnimations .animation-slider,
  .book-slider, .hq-slider {
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 100%;
    height: 100%;
  }

  & .viewedMovies .movie-slider Button,
  .viewedSeries .serie-slider Button,
  .viewedAnimations .animation-slider Button,
  .BooksRead .book-slider Button, 
  .BooksToRead .hq-slider Button {
    width: 6rem;
    height: 3rem;
    padding-top: 0.2rem;
  }

  & .viewedMovies .movie-slider Button i,
  .viewedSeries .serie-slider Button i,
  .viewedAnimations .animation-slider Button i,
  .BooksRead .book-slider Button i, 
  .BooksToRead .hq-slider Button i {
    font-size: 1.8rem;
  }

  /* A partir daqui será os movie and series cards */
  & .viewedMovies .movie-slider .card,
  .viewedSeries .serie-slider .card,
  .viewedAnimations .animation-slider .card,
  .book-slider .card, .hq-slider .card {
    width: 100%;
    height: 97%;
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    gap: 2rem;
  }
  
  & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    font-size: 2rem;
    text-align: center;
  }

  & .movie-card,
  .serie-card,
  .animation-card,
  .book-card, .hq-card {
    width: 22rem;
    height: 100%;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    /* background-color: lightcoral; */
  }

  & .movie-card .newMoreInfo,
  .serie-card .newMoreInfo,
  .animation-card .newMoreInfo,
  .book-card .newMoreInfo,
  .hq-card .newMoreInfo {
    position: absolute;
    width: 94%;
    height: 18rem;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    opacity: 0.4;
    border-radius: 2rem 2rem 0 0;
    transform: translateY(90%);
    transition: transform 0.4s ease-in-out;
  }

  & .movie-card .newMoreInfo button,
  .serie-card .newMoreInfo button,
  .animation-card .newMoreInfo button,
  .book-card .newMoreInfo button,
  .hq-card .newMoreInfo button {
    width: 60%;
    height: 3rem;
    border-radius: 25rem;
    font-size: 1.6rem;
  }

  & .movie-card:hover .newMoreInfo,
  .serie-card:hover .newMoreInfo,
  .animation-card:hover .newMoreInfo,
  .book-card:hover .newMoreInfo,
  .hq-card:hover .newMoreInfo {
    transform: translateY(0);
    opacity: 1;
  }

  & .movie-card img,
  .serie-card img,
  .animation-card img,
  .book-card img,
  .hq-card  img{
    width: 18.5rem;
    margin-bottom: 0.8rem;
  }

  & .book-card img,
  .hq-card  img {
    height: 28rem;
  }
  
  & .movie-card .movie-modal img,
  .serie-card .serie-modal img,
  .animation-card .animation-modal img, 
  .modal-info .book-modal img,
  .modal-info .hq-modal img {
    width: 55%;
    height: 100%;
    margin: 0.8rem 0 1.6rem 0;
  }

  & .movie-card h3,
  .serie-card h3,
  .animation-card h3,
  .book-card h3,
  .hq-card h3 {
    font-size: 1.9rem;
  }

  & .book-card h3,
  .hq-card h3 {
    font-size: 1.8rem;
  }

  & .movie-card p,
  .serie-card p,
  .animation-card p,
  .book-card p ,
  .hq-card p {
    font-size: 1.7rem;
    gap: 0.3rem;
    display: flex;
    align-items: center;
  }

  & .movie-card .movie-modal,
  .serie-card .serie-modal,
  .animation-card .animation-modal,
  .modal-info .book-modal,
  .modal-info .hq-modal {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  & .movie-card .movie-modal .description,
  .serie-card .serie-modal .description,
  .animation-card .animation-modal .description,
  .modal-info .book-modal .description,
  .modal-info .hq-modal .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  & .movie-card .movie-modal .description .sinopse p,
  .serie-card .serie-modal .description .sinopse p,
  .animation-card .animation-modal .description .sinopse p,
  .modal-info .book-modal .description .sinopse p,
  .modal-info .hq-modal .description .sinopse p {
    width: 100%;
    padding: 0 1rem;
    font-size: 1.9rem;
    text-align: justify;
  }

  & .movie-card .movie-modal .description h4,
  .serie-card .serie-modal .description h4,
  .animation-card .animation-modal .description h4,
  .modal-info .book-modal .description h4,
  .modal-info .hq-modal .description h4,
  .movie-card .movie-modal .description h4 i,
  .serie-card .serie-modal .description h4 i,
  .animation-card .animation-modal .description h4 i,
  .movie-card .movie-modal .description h4 span,
  .serie-card .serie-modal .description h4 span,
  .animation-card .animation-modal .description h4 span {
    font-size: 1.6rem;
    height: 2rem;
    text-align: center;
  }

  & .movie-card .movie-modal .description h4 i,
  .serie-card .serie-modal .description h4 i,
  .animation-card .animation-modal .description h4 i{
    margin: 0 0.5rem;
    color: yellow;
  }

  & .movie-card .movie-modal .description .sinopse,
  .serie-card .serie-modal .description .sinopse,
  .animation-card .animation-modal .description .sinopse, 
  .modal-info .book-modal .description .sinopse,
  .modal-info .hq-modal .description .sinopse {
    height: 12rem;
    width: 80%;
    overflow-y: auto;
  }

  & .movie-card .movie-modal .description .sinopse::-webkit-scrollbar,
  .serie-card .serie-modal .description .sinopse::-webkit-scrollbar,
  .animation-card .animation-modal .description .sinopse::-webkit-scrollbar,
  .modal-info .book-modal .description .sinopse::-webkit-scrollbar,
  .modal-info .hq-modal .description .sinopse::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 1rem;
    background-color: #00000039;
  }

  & .movie-card .movie-modal .description .sinopse::-webkit-scrollbar-thumb,
  .serie-card .serie-modal .description .sinopse::-webkit-scrollbar-thumb,
  .animation-card .animation-modal .description .sinopse::-webkit-scrollbar-thumb,
  .modal-info .book-modal .description .sinopse::-webkit-scrollbar-thumb,
  .modal-info .hq-modal .description .sinopse::-webkit-scrollbar-thumb {
    border-radius: 1rem;
  }

  @media (max-width: 1920px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 72.5rem;
  }
  }
  
  @media (max-width: 1537px){
    & .viewedMovies .movie-slider .card .loading,
    .viewedSeries .serie-slider .card .loading,
    .viewedAnimations .animation-slider .card .loading,
    .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 55rem;
    }
  }
  
  @media (max-width: 1496px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 53rem;
  }
  }
  
  @media (max-width: 1441px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 50rem;
  }
  }
  
  @media (max-width: 1327px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 45rem;
  }
  }
  
  @media (max-width: 835px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 23.5rem;
  }
  }
  
  @media (max-width: 769px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 21rem;
  }
  }
  
  @media (max-width: 602px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 13.5rem;
  }
  }
  
  @media (max-width: 426px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 6rem;
  }

  & .movie-card .movie-modal img,
  .serie-card .serie-modal img,
  .animation-card .animation-modal img, 
  .modal-info .book-modal img,
  .modal-info .hq-modal img {
    width: 160%;
    margin: 0.8rem 0 1.6rem 0;
  }
  }

  @media (max-width: 417px) {
    & .viewedMovies,
    .viewedSeries,
    .viewedAnimations,
    .BooksRead,
    .BooksToRead {
      height: 39rem;
      width: 95%;
      gap: 0;
    }

    & .movie-card,
    .serie-card,
    .animation-card,
    .book-card,
    .hq-card {
      justify-content: center;
    }

    & .movie-card img,
    .serie-card img,
    .animation-card img {
      width: 15rem;
      margin-bottom: 0.8rem;
    }

    & .movie-card h3,
    .serie-card h3,
    .animation-card h3,
    .book-card h3,
    .hq-card h3 {
      font-size: 1.7rem;
    }

    & .movie-card .movie-modal .description .sinopse,
    .serie-card .serie-modal .description .sinopse,
    .animation-card .animation-modal .description .sinopse,
    .modal-info .book-modal .description .sinopse,
    .modal-info .hq-modal .description .sinopse {
      height: 12rem;
      width: 95%;
      overflow-y: auto;
    }

    & .movie-card .movie-modal .description .sinopse p,
    .serie-card .serie-modal .description .sinopse p,
    .animation-card .animation-modal .description .sinopse p,
    .modal-info .book-modal .description .sinopse p,
    .modal-info .hq-modal .description .sinopse p {
    font-size: 1.7rem;
    }
  }

  @media (max-width: 493px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 5rem;
  }
  }
  
  @media (max-width: 376px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 3.5rem;
  }
  
  /* & .movie-card .movie-modal img,
  .serie-card .serie-modal img,
  .animation-card .animation-modal img,
  .modal-info .book-modal img,
  .modal-info .hq-modal img {
    width: 100%;
  } */
  }
  
  @media (max-width: 361px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 3.5rem;
  }
  }
  
  @media (max-width: 357px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 3.3rem;
  }

    & .movie-card h3,
    .serie-card h3,
    .animation-card h3,
    .book-card h3,
    .hq-card h3 {
      font-size: 1.5rem;
    }

    & .movie-card .movie-modal .description .sinopse p,
    .serie-card .serie-modal .description .sinopse p,
    .animation-card .animation-modal .description .sinopse p,
    .modal-info .book-modal .description .sinopse p,
    .modal-info .hq-modal .description .sinopse p {
      font-size: 1.7rem;
    }
  }
  
  @media (max-width: 345px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 3rem;
  }
  }
  
  @media (max-width: 332px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 2rem;
  }
  }

  @media (max-width: 329px){
    & .viewedMovies .movie-slider .card .loading,
  .viewedSeries .serie-slider .card .loading,
  .viewedAnimations .animation-slider .card .loading,
  .book-slider .card .loading, .hq-slider .card .loading {
    padding-left: 2rem;
  }
  }
`;
