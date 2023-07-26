import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Dashboard.jsx'
import DirectAssesment from './DirectAssesment'
import WithholdingTax from './WithholdingTax.jsx'
import PayE from './PayE.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sidebar from './Sidebar.jsx'
import RoadTaxes from './RoadTaxes.jsx'
import CapitalGainsTax from './CapitalGainsTax.jsx'
import StampDuty from './StampDuty'
import PoolBettingandGaming from './PoolBettingandGaming.jsx'
import PayeReport from './PayeReport.jsx'
import Artisans from './Artisans.jsx'
import Professional from './Professional.jsx'
import Users from './Users.jsx'
import Roles from './Roles.jsx'
import TaxPayment from './TaxPayment.jsx'
import TaxCategories from './TaxCategories.jsx'
import TaxSubCategories from './TaxSubCategories.jsx'
import UserLevels from './UserLevels.jsx'
import SystemUsers from './SystemUsers.jsx'
import Reports from './Reports.jsx'
import MakePayment from './MakePayment.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/DirectAssesment",
    element: <DirectAssesment/>,
  },
  {
    path: "/withholdingTax",
    element: <WithholdingTax />,
  },
  {
    path: "/paye",
    element: <PayE/>,
  },
  {
    path: "/RoadTaxes",
    element: <RoadTaxes/>,
  },
  {
    path: "/CapitalGainsTax",
    element: <CapitalGainsTax/>,
  },
  {
    path: "/StampDuty",
    element: <StampDuty/>,
  },
  {
    path: "/PoolBettingandGaming",
    element: <PoolBettingandGaming/>,
  },
  {
    path: "/PayeReport",
    element: <PayeReport />,
  },
  {
    path: "/Artisan",
    element: <Artisans/>,
  },
  {
    path: "/Professional",
    element: <Professional />,
  },
  {
    path: "/User",
    element: <Users />,
  },
  {
    path: "/Roles",
    element: <Roles />,
  },
  {
    path: "/TaxPayment",
    element: <TaxPayment/>,
  },
  {
    path: "/TaxCategory",
    element: <TaxCategories />,
  },
  {
    path: "/TaxSubCategory",
    element: <TaxSubCategories />,
  },
  {
    path: "/UserLevel",
    element: <UserLevels />,
  },
  {
    path: "/SystemUser",
    element: <SystemUsers />,
  },
  {
    path: "/Reports",
    element: <Reports />,
  },
  {
    path: "/MakePayment",
    element: <MakePayment/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
