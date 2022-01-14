import React from 'react'

import DappyCard from './DappyCard'
import './DappyList.css'

export default function DappyList({ dappies, store }) {

  return (
    <div className="dappy-list__wrapper">
      {dappies.map((dappy, i) => (
        <DappyCard
          key={i}
          dappy={dappy}
          store={store}
        />
      ))
      }
    </div>
  )
}
