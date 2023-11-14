import api from "../api";
import {createContext, useContext, useEffect, useState} from 'react';
import { UserContext } from "./userContext";


export const VideoContext = createContext({}as any);

 
  interface Video{
    object:{

      name: string;
      imageUrl: string;
      title: string;
      description:string;
      views: number;
      tempo: string;
    }
  }

  export const VideoStorage =({children}: any)=>{
      const [Search, setSearch] = useState('');
      const {token} = useContext(UserContext);
      const [videos, setVideos] = useState<Video[]>([]);


      const SearchVideo=()=>{
       api.get(`http://localhost:4000/videos/search?search=${Search}`).then(response=>{
          setVideos(response.data.videos)
          console.log(response.data)
          
      }).catch(error =>{
        alert("Falha ao pesquisar video")
        console.log(error)
        setSearch('');
      })
      }

      

      const AdicionarVideo = (title: string, description: string, user_id: string, imageUrl: string)=>{
          api.post('/videos/create-video', {title, description, user_id, imageUrl}, {headers:{Authorization: token}}).then((response) => {
              if (response.status === 200) {
                alert("Video enviado com sucesso");
              } else {
                alert("Falha ao enviar vídeo");
              }
            })
            .catch((error) => {
              alert("Falha ao enviar vídeo");
            });
      }

      function AllVideos() {
        return api.get('/videos/get-all-videos')
          .then(response => {
            if (response.status === 200) {
              setVideos(response.data.results)
              console.log(videos)
              // console.log(response.data.results)
              
            } else {
              throw new Error(`Request failed with status: ${response.status}`);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
      
    

      return (

          <VideoContext.Provider value={{
              AdicionarVideo,
              AllVideos,
              videos,
              SearchVideo,
              Search,
              setSearch
          }}>
              {children}
          </VideoContext.Provider>
      )
}