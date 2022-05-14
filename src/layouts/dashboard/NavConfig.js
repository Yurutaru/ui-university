// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: getIcon('mdi-light:home'),
  },
  {
    title: 'Faculties',
    path: '/dashboard/faculties',
    icon: getIcon('fa-solid:university'),
  },
  {
    title: 'People',
    path: '/dashboard/people',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Tickets',
    path: '/dashboard/tickets',
    icon: getIcon('icomoon-free:ticket'),
  },
  {
    title: 'Products',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
