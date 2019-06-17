import * as React from 'react'

export default function AlbumsList(props) {
  const album = props.albums
    return (<div>
        <h1>All Albums</h1>

        There are {album.length} albums available.
        <ul>
          {album.map(album => <li key={album.id}>{album.title}</li>)}
        </ul>
  </div>)
}