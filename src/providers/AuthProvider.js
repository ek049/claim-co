import React, { createContext, useContext } from 'react'

import useCurrentUser from '../hooks/use-current-user.hook'
import Header from '../components/Header'

const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, loggedIn, tools] = useCurrentUser()

  if (!user || !loggedIn) return (
    <>
    <div style={{ display:"grid" }}>
      <Header
        title={<><span className="highlight">The Claim Company</span> NFT Project</>}
        subtitle={<>Get your <span className="highlight">MOTHERLODE</span> on the blockchain!</>}
      />
      
      <div
        style={{ display:"inline-block", margin:"1% auto" }}
        className="btn btn-bg rounded"
        onClick={() => tools?.logIn()}>
        Sign In to start
      </div>
    </div>
    </>
  )

  return (
    <AuthContext.Provider value={{
      user,
      loggedIn,
      ...tools
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
