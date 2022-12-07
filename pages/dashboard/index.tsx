import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import DashboardComp from "../../components/Dashboard";
const Dashboard: NextPage = () => {
  return (
      <div>
        <DashboardComp />
      </div>
  );
};

export default Dashboard;