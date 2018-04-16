import React from 'react'
import AudioButton from '../components/AudioButton';
import VideoButton from '../components/VideoButton';
import PodcastPreview from '../components/PodcastPreview';

export default (props) => {
  const { trackName, artworkUrl60, artistName, collectionName, previewUrl } = props.data; 
  return (
    <tr>
      <td style={{width: "50px", padding: 0}}>
        <img src={artworkUrl60} alt={artistName} className="img-thumbnail" />
      </td>
      <td>{trackName}</td>
      <td>{artistName}</td>
      <td>{collectionName}</td>
      <td>
        {
          'tvShow movie'.includes(props.mediaType) ? 
            <VideoButton video={previewUrl} title={`${artistName} | ${trackName}`}/> :
            props.mediaType === 'music' ?
              <AudioButton audio={previewUrl}/>  : 
              <PodcastPreview link={props.data.trackViewUrl} />
        }
      </td>
    </tr>    
  )
}

