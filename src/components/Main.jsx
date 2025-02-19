import React from 'react'
import ItemList from './ItemList';

const Main = () => {
  return (
    <div className="main">

      <ItemList title="Artistas" items={5}></ItemList>

      <ItemList title="Músicas" items={10}></ItemList>

    </div>
  )
}

export default Main