import React from "react";
import AreaChart from "./AreaChart";
import LineChart from "./LineChart";
import BadgeStatus from "./BadgeStatus";
import "../css/dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardPage() {
  // REACT_APP_API_URL
  // console.log(process.env.REACT_APP_API_URL);
  // process.env.REACT_APP_API_URL

  const notify = () => {
    // toast("Wow so easy !");

    toast.error("Error fetching data", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    console.log("notify was called");
  };

  return (
    <div className="dashboardParent">
      <ToastContainer />
      <AreaChart errorCallback={notify} />
      <LineChart />
      <BadgeStatus
        title="Pending Queries"
        endpoint="queries/summary"
        link="/admin/CustomerqueriesPage"
      />
      <BadgeStatus
        title="Pending Jobs"
        endpoint="jobs/quantity"
        link="/admin/RunningjobsPage"
      />
      <BadgeStatus title="Website visits" endpoint="visiters" />
    </div>
  );
}
