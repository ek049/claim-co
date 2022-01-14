import React from 'react'

import { Pack } from '../../utils/PackClass'
import useDappyPacks from '../../hooks/use-dappy-packs.hook'
import Header from '../Header'
import DappyList from '../DappyList'
import ErrorLoadingRenderer from '../ErrorLoadingRenderer'


export default function Packs() {
  const { loading, error, data: packs } = useDappyPacks()
  return (
    <>
      <Header
        title={<><span className="highlight">Motherlode</span>Packs</>}
        subtitle={<>Join the <span className="highlight">pack drop</span> to get more Motherlodes</>}
      />
      <ErrorLoadingRenderer loading={loading} error={error}>
        <DappyList dappies={packs.map(p => new Pack(p?.familyID, p?.name))} store />
      </ErrorLoadingRenderer>
    </>
  )
}
