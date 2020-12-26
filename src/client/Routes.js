import HomePage from './pages/HomePage';
import UserListPage from './pages/DetailPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UserListPage,
    path: '/detail/:id',
  }, 
];