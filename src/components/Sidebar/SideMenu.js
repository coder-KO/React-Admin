import { Dashboard, Storage, AddToPhotos } from '@material-ui/icons';

export const SideMenu = [
  {
    title: 'Home',
    path: '/',
    icon: <Dashboard />,
  },
  {
    title: 'Products',
    path: '/products',
    icon: <Storage />,
    cName: 'nav-text',
  },
  {
    title: 'Forms',
    path: '/forms',
    icon: <AddToPhotos />,
    cName: 'nav-text',
  },
];
