import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Api.css'
import {useNavigate} from "react-router-dom"


const ApiData = () => {
    const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
//   const [details, setDetails] = useState();

  useEffect(() => {
    fetchMoreData();
  },[page]);

  const fetchMoreData = () => {
    fetch(
      `https://gateway.marvel.com:443/v1/public/comics?&offset=${(page - 1) * 10}&apikey=7126cee6885bffa7669a4cadf8522c15`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData((prevData) => [...prevData, ...responseData.data.results]);
      });
  };

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isBottom) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handelNavigate = (data) => {
    console.log(data);
    localStorage.setItem("data",JSON.stringify(data))
    navigate("/DetailsPage")
  }


  return (
    <div className='main'>
      <div>
        <div className='header'>
          <h1>Marvel</h1>
        </div>
        <div>
          <div className='card_main'>
            {data?.map((item, index) => (
                <div className='dcard'>
              <Card sx={{ maxWidth: 345 }} key={index} className='card_call' onClick={()=>handelNavigate(item)}>
                <CardActionArea>
                  <CardMedia
                  className='imge'
                    component='img'
                    height='400'
                    image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt={item.title}
                  />
                  <CardContent>
                    <hr />
                    <Typography gutterBottom variant='h5' component='div' className='title'>
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                      className='discre'
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiData;