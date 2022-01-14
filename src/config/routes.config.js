import PackDetails from '../components/pages/PackDetails.page'
import Collection from '../components/pages/Collection.page'
import Dappies from '../components/pages/Dappies.page'
import Packs from '../components/pages/Packs.page'
import HomeNFT from '../components/pages/HomeNFT'

export const ROUTES = [
  { name: "Home", path: "/homeNFT", component: HomeNFT, nav: true },
  { name: "Motherlodes", path: "/dappies", component: Dappies, nav: true },
  { name: "Collection", path: '/collection', component: Collection, nav: true },
  { name: "Packs", path: '/packs', component: Packs, nav: true },
  { name: "PackDetails", path: '/packs/:packID', component: PackDetails, nav: false }
]

export const NAV_ROUTES = ROUTES.filter(r => r.nav)