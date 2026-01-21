import { HeaderOnly } from '~/components/Layout';
import { Checkout } from '~/pages/Checkout';
import { Home } from '~/pages/Home';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/checkout', component: Checkout, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
