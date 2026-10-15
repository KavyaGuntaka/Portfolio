import { createBrowserRouter } from "react-router";
import HomePage from "../App";
import HealthMateCaseStudy from "../pages/HealthMateCaseStudy";
import UniversityManagementSystemCaseStudy from "../pages/UniversityManagementSystemCaseStudy";
import XtremeCodingAcademyCaseStudy from "../pages/XtremeCodingAcademyCaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/work/healthmate",
    Component: HealthMateCaseStudy,
  },
  {
    path: "/work/xtreme-coding-academy",
    Component: XtremeCodingAcademyCaseStudy,
  },
  {
    path: "/work/university-management-system",
    Component: UniversityManagementSystemCaseStudy,
  },
  {
    path: "*",
    Component: HomePage,
  },
]);
