import { createRouter ,createWebHistory} from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ShowProject from './pages/ShowProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ShowProject
        }
    ]
});
export { router };