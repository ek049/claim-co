import React from 'react'

import useDappyTemplates from '../../hooks/use-dappy-templates.hook'
import DappyList from '../DappyList'
import Header from '../Header'
import ErrorLoadingRenderer from '../ErrorLoadingRenderer'
import './Home.page.css'

export default function Dappies() {
  const { data: dappyTemplates, loading, error } = useDappyTemplates()

  return (
    <>
      <Header
        title={<><span className="highlight">Motherlode</span>Store</>}
        subtitle={<>Buy individual <span className="highlight">Motherlodes</span> in our store</>}
      />
      <ErrorLoadingRenderer loading={loading} error={error}>
        <DappyList dappies={dappyTemplates} store />
      </ErrorLoadingRenderer>
    </>
  )
}
