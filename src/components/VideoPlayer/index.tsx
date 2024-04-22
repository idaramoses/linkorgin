import React from 'react';

interface YouTubeVideoProps {
  videoUrl: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl }) => {
  return (
    <div>
      <iframe
         
        //   width="560"
   
        className='rounded-lg  h-52 '
          src={videoUrl}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default YouTubeVideo;
