import HomeNFT from '../components/pages/HomeNFT'
import Home from '../components/pages/Home'
import comingSoon from '../components/pages/comingSoon.page'
//import Northbrook from '../components/pages/nbk.js'
//import VernonHills from '../components/pages/vh'

export const ROUTES = [
  { name: "Home", path: "/", component: Home, nav: true },
  { name: "Northbrook", path: "/nbk", component: comingSoon, nav: true },
  { name: "Vernon Hills", path: "/vh", component: comingSoon, nav: true },
  { name: "Motherlode Challenge", path: "/ml", component: comingSoon, nav: true },
  { name: "Email Club", path: "/email-club", component: comingSoon, nav: true },
  { name: "Contact Us", path: "/contact-us", component: comingSoon, nav: true },
  { name: "NFT", path: '/NFT', component: HomeNFT, nav: true }
]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)