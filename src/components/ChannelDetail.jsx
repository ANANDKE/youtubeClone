import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  console.log(channelDetail, videos);


  useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

      // fetchFromAPI(`search?channelID=${id}part=snippet`)

      fetchFromAPI(`search?channelId=${id}&part=snippet&
      order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(124,10,214,1) 35%, rgba(0,212,255,1) 100%)', zIndex: '10', height: '300px'}}
         />
         <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
         <Box display='flex' p='2'>
            <Box sx={{ mr: { sm: '100px' }}} />
              <Videos videos={videos} />
         </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail 