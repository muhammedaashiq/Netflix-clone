import React, { useEffect , useState } from 'react'
import Youtube from 'react-youtube'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import './RowPost.css'
import axios from '../../Axios'

function RowPost(props) {
  const [movies , setMovies] = useState([])
  const [ urlId , setUrlId ] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if( response.data.results.length !== 0 ){
        setUrlId(response.data.results[0])
        console.log('urlId Added')
        console.log(response.data.results)
      }else{
        console.log('Array Empty')
      }
    }).catch((e)=>{
      console.log('======')
      console.log(e)
    })
  }

  return (

    <div className='row' >
      <h2>{props.title}</h2>
      <div className = 'posters' >
        {movies.map((obj)=>
        <img onClick={() => handleMovie(obj.id)} className={ props.isSmall ? 'smallPoster' : 'poster' } src={`${imageUrl + obj.backdrop_path}`} alt="" />
        )}
      </div>
      <div className='video'>
          {urlId && <section>
              <i onClick={() => { setUrlId('') }} style={{ fontSize: '60px', position:'absolute' ,right:0 }}>&times;</i>
              <Youtube videoId={urlId.key} opts={opts} />
          </section>}
      </div>
      {/* { urlId && <Youtube videoId = {urlId.key} opts={opts}/> } */}
    </div>

  )
}

export default RowPost
