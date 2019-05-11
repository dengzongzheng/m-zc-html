import WebsiteIndex from '@pages/website/index/index';
import WebsiteDetail from '@pages/website/detail/detail';
import WebsiteList from '@pages/website/list/list';
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
        path:'/list',
        exact:true,
        component:WebsiteList
    },
    {
        path:'/about',
        exact:true,
        component:About
    }
];

export default routers;
