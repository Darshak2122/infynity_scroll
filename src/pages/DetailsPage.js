import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailsPage.css'; // Import your CSS file for styling

const DetailsPage = () => {
  const navigate = useNavigate();
  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    setComicData(JSON.parse(localStorage.getItem('data')));
  }, []);

  console.log('comicData', comicData);

  return (
    <div className="details-page-container">
      <button onClick={() => navigate('/')}>Go Back Home</button>
      <div className="comic-list">
        <h1>Comic Details </h1>
        {comicData.length === 0 ? (
          <p>No comic data available.</p>
        ) : (
         
            <div className="comic-item">
                <div className='imge'>
                    <img  src={`${comicData.thumbnail.path}.${comicData.thumbnail.extension}`}/>
                </div>
                <div className='dis'>
                    <span><h2>Title</h2>  <h3>{comicData.title}</h3></span>
              <span><h2>Description</h2>  <h3>{comicData.description}</h3></span>
              <span><h2>Format</h2>  <h3>{comicData.format}</h3></span>
              
                </div>
            </div>
      )}
      </div>
    </div>
  );
};

export default DetailsPage;