import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import StyleguideView from '../views/Style-guideView.vue'
import page404 from '../views/404View.vue'
import ListeView from '../views/listes-artistes/ListeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/Programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/Artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/Festival', name: 'FestivalView', component: FestivalView },
    { path: '/Contact', name: 'ContactView', component: ContactView },
    { path: '/Concert', name: 'ConcertView', component: ConcertView },
    { path: '/Artiste', name: 'ArtisteView', component: ArtisteView },
    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/styleguide', name: 'StyleguideView', component: StyleguideView },
    { path: '/Liste', name: 'ListeView', component: ListeView },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },

  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || { top: 0 }
  },
})

export default router
