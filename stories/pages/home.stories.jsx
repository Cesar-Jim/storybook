import Home from '../../pages/index';

const HomePageSB = {
  title: 'pages/Home',
  component: Home,
};

export const HomePage = (args) => <Home {...args} />;
HomePage.args = { firstName: 'Cesar', lastName: 'Jimenez' };

export default HomePageSB;
