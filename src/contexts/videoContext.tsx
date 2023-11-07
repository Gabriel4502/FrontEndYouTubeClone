import api from "../api";
import {createContext, useContext, useEffect, useState} from 'react';
import { UserContext } from "./userContext";

export const VideoContext = createContext({}as any);

 interface Video{
  name: string;
  imageUrl: string;
  title: string;
  description:string;
  views: number;
  tempo: string;
}

export const VideoStorage =({children}: any)=>{
    const {token} = useContext(UserContext);
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(()=>{
      AllVideos();
  },[token]);
     

    const AdicionarVideo = (title: string, description: string, user_id: string, path: string, arquivo: File)=>{
        api.post('/videos/create-video', {title, description, user_id, path}, {headers:{Authorization: token}}).then((response) => {
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

    const AllVideos=()=>{
      api.get('/videos/get-all-videos').then(response => {
        setVideos(response.data)
         return console.log(response.data);
        }).catch(error => {
          console.error(error);
        });
}


    return (

        <VideoContext.Provider value={{
            AdicionarVideo,
            AllVideos,
            videos
        }}>
            {children}
        </VideoContext.Provider>
    )
}