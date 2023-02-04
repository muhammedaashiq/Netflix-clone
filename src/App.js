import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import { originals, action, comedy, horror, romance, doc, trending} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url = {originals} title = 'Netflix Originals' />
      <RowPost url = {action}   title = 'Actions'       isSmall />
      <RowPost url = {comedy}   title = 'Comedy'        isSmall />
      <RowPost url = {horror}   title = 'Horror'        isSmall />
      <RowPost url = {romance}  title = 'Romance'       isSmall />
      <RowPost url = {doc}      title = 'Documentaries' isSmall />
      <RowPost url = {trending} title = 'Trending'     isSmall />
    </div>
  );
}

export default App;
