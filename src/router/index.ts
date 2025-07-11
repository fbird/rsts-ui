import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: { name: 'home' },
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: () => import('@/views/maintenance/Index.vue')
    },
    {
      path: '/home',
      name: 'home',
      components: {
        fullSecContent: () => import('@/views/home/HomeView.vue')
      },
    },
    {
      path: '/course',
      name: 'course',
      redirect: { name: 'courseCatalog' },
      children: [
        {
          path: 'catalog',
          name: 'courseCatalog',
          components: {
            fullSecContent: () => import('@/views/courses/CourseNavView.vue'),
            default: () => import('@/views/courses/CourseMainView.vue')
          },
        },
        {
          path: 'catalog/:name',
          name: 'catalogDetail',
          components: {
            fullSecContent: () => import('@/views/courses/CourseDetailNavView.vue'),
            default: () => import('@/views/courses/CourseCatalogDetailView.vue')
          },
        },
      ]
    },
    {
      path: '/certificates',
      name: 'certificates',
      redirect: { name: 'certificatesIndex' },
      children: [
        {
          path: 'index',
          name: 'certificatesIndex',
          component: () => import('@/views/certificates/Index.vue'),
        },
        {
          path: 'search',
          name: 'certificatesSearch',
          component: () => import('@/views/certificates/Search.vue'),
        },
        {
          path: 'detail/:sn',
          name: 'certificatesDetail',
          component: () => import('@/views/certificates/Detail.vue'),
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/Index.vue')
    },

    {
      path: '/admin',
      name: 'admin',
      redirect: { name: 'certificateManage' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/admin/login/Index.vue')
        },
        {
          path: 'certificate',
          name: 'certificateManage',
          component: () => import('@/views/admin/certificate/Index.vue')
        },
      ]
    },
    {
      path: '/error/401',
      name: 'errorPage401',
      component: () => import('@/views/errorPage/error-401.vue')
    },
    {
      path: '/error/403',
      name: 'errorPage403',
      component: () => import('@/views/errorPage/error-403.vue')
    },
    {
      path: '/error/404',
      name: 'errorPage404',
      component: () => import('@/views/errorPage/error-404.vue')
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   redirect: '/error/404'
    // }
  
  ],

})

export default router
