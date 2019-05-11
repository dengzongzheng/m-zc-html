import WebsiteIndex from '@pages/website/index/index';
import WebsiteDetail from '@pages/website/detail/detail';
import List from '@pages/website/list/list';
import About from '@pages/website/about/about';
const routers = [
    {
        path:'/',
        exact:true,
        component:WebsiteIndex
    },
    {
        path:'/index',
        exact:true,
        component:WebsiteIndex
    },
    {
        path:'/detail',
        exact:true,
        component:WebsiteDetail
    },
    {
        path:'/others',
        exact:true,
        component:List
    },
    {
        path:'/pictures',
        exact:true,
        component:List
    },
    {
        path:'/porcelains',
        exact:true,
        component:List
    },
    {
        path:'/jades',
        exact:true,
        component:List
    },
    {
        path:'/about',
        exact:true,
        component:About
    }
];

export default routers;
