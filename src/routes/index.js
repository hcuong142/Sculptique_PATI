import { HeaderOnly } from '~/components/Layout';
import { Home } from '~/pages/Home';

const publicRoutes = [
    { path: '/', component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
