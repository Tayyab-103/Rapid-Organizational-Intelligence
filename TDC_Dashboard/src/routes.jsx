/* eslint-disable no-unused-vars */
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import PeopleGroupIcon from '@mui/icons-material/PeopleGroup';
// import BuildingIcon from "@mui/icons-material/Building";
// import TeamsIcon from "@mui/icons-material/Teams";
// import ProjectorFillIcon from "@mui/icons-material/ProjectorFill";
// import LeaderboardIcon from "@mui/icons-material/Leaderboard";
// import HandshakeSimpleIcon from "@mui/icons-material/HandshakeSimple";
// import TaskIcon from "@mui/icons-material/Task";
// import HandHoldingDollarIcon from "@mui/icons-material/HandHoldingDollar";

// Admin Imports
import Welcome from "./views/admin/default";
// import MemberData from "views/admin/member_data";
import Members from "./views/members";
// import ProjectData from "views/admin/project_data";
// import Clients from "views/clients";
// import Departments from "views/departments";
// import Leads from "views/leads";
// import Projects from "views/projects";
// import Teams from "views/teams";

// Auth Imports
// import PayRollTable from "views/payroll";
// import TaskTable from "views/task";
// import EarningTable from "views/earning";
// import DepartmentTeamTable from "views/admin/department_data";

const routes = [
  {
    name: "Welcome",
    layout: "/admin",
    icon: <HomeIcon width="20px" height="20px" color="inherit" />,
    path: "/default",
    component: Welcome,
  },
  // {
  //   name: "Member Data",
  //   layout: "/admin",
  //   path: "/member-data",
  //   icon: <BarChartIcon width="20px" height="20px" color="inherit" />,
  //   component: MemberData,
  // },
  // {
  //   name: "Project Data",
  //   layout: "/admin",
  //   path: "/project-data",
  //   icon: <BarChartIcon fontSize="small" color="primary" />,
  //   component: ProjectData,
  // },
  {
    name: "Members",
    layout: "/admin",
    path: "/members",
    icon: <HomeIcon width="20px" height="20px" color="inherit" />,
    component: Members,
  },
  // {
  //   name: "Departments",
  //   layout: "/admin",
  //   path: "/departments",
  //   icon: <BuildingIcon fontSize="small" color="primary" />,
  //   component: Departments,
  // },
  // {
  //   name: "Department Teams",
  //   layout: "/admin",
  //   path: "/deparment-data",
  //   icon: <BarChartIcon fontSize="small" color="primary" />,
  //   component: DepartmentTeamTable,
  // },
  // {
  //   name: "Teams",
  //   layout: "/admin",
  //   path: "/teams",
  //   icon: <TeamsIcon fontSize="small" color="primary" />,
  //   component: Teams,
  // },
  // {
  //   name: "Projects",
  //   layout: "/admin",
  //   path: "/projects",
  //   icon: <ProjectorFillIcon fontSize="small" color="primary" />,
  //   component: Projects,
  // },
  // {
  //   name: "Leads",
  //   layout: "/admin",
  //   path: "/leads",
  //   icon: <LeaderboardIcon fontSize="small" color="primary" />,
  //   component: Leads,
  // },
  // {
  //   name: "Clients",
  //   layout: "/admin",
  //   path: "/clients",
  //   icon: <HandshakeSimpleIcon fontSize="small" color="primary" />,
  //   component: Clients,
  // },
  // {
  //   name: "Task",
  //   layout: "/admin",
  //   path: "/task",
  //   icon: <TaskIcon fontSize="small" color="primary" />,
  //   component: TaskTable,
  // },
  // {
  //   name: "PayRoll",
  //   layout: "/admin",
  //   path: "/payroll/getAll",
  //   icon: <HandHoldingDollarIcon fontSize="small" color="primary" />,
  //   component: PayRollTable,
  // },
  // {
  //   name: "Earning",
  //   layout: "/admin",
  //   path: "/earnings/getAll",
  //   icon: <HandHoldingDollarIcon fontSize="small" color="primary" />,
  //   component: EarningTable,
  // },
];

export default routes;
