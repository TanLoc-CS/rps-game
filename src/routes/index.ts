import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";
import PickRPSPage from "../pages/PickRPSPage";
import PvEPage from "../pages/PvEPage";

const routes = [
  {
    path: '',
    component: HomePage,
    withNavBar: false,
  },
  {
    path: '/instruction',
    component: InstructionPage,
    withNavBar: true,
  },
  {
    path: '/gameplay',
    component: PickRPSPage,
    withNavBar: true,
  },
  {
    path: '/gameplay/:pick',
    component: PvEPage,
    withNavBar: true,
  },
];

export default routes;