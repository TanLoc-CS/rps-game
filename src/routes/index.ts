import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";
import PickRPSPage from "../pages/PickRPSPage";
import ResultPage from "../pages/ResultPage";

const routes = [
  {
    path: '',
    component: HomePage,
    isAuth: false
  },
  {
    path: '/instruction',
    component: InstructionPage,
    isAuth: true
  },
  {
    path: '/gameplay',
    component: PickRPSPage,
    isAuth: true
  },
  {
    path: '/gameplay/:item',
    component: ResultPage,
    isAuth: true
  },
  {
    path: '/*',
    component: HomePage
  }
];

export default routes;