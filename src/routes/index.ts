import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";
import PickRPSPage from "../pages/PickRPSPage";
import ResultPage from "../pages/ResultPage";

const routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '/instruction',
    component: InstructionPage,
  },
  {
    path: '/gameplay',
    component: PickRPSPage,
  },
  {
    path: '/gameplay/:item',
    component: ResultPage,
  },
];

export default routes;