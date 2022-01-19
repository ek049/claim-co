import HomeNFT from '../components/pages/HomeNFT'
import Home from '../components/pages/Home'
//import Northbrook from '../components/pages/nbk.js'
//import VernonHills from '../components/pages/vh'

export const ROUTES = [
  { name: "Home", path: "/", component: Home, nav: true },
  { name: "Northbrook", path: "/nbk", component: Home, nav: true },
  { name: "Vernon Hills", path: "/vh", component: Home, nav: true },
  { name: "Motherlode Challenge", path: "/ml", component: Home, nav: true },
  { name: "Email Club", path: "/email-club", component: Home, nav: true },
  { name: "NFT", path: '/NFT', component: HomeNFT, nav: true }
]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)