import React from 'react'
import AudioButton from '../components/AudioButton';

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
        <AudioButton audio={previewUrl} />
      </td>
    </tr>    
  )
}

