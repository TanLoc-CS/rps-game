import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";
import PickRPSPage from "../pages/PickRPSPage";
import PvEPage from "../pages/PvEPage";

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
    path: '/gameplay/:pick',
    component: PvEPage,
  },
];

export default routes;