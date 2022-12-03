import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
//data
import WidgetCard from "@/components/dashboard/component/card/WidgetCard";
import ActivityFeedCard from "@/components/dashboard/component/card/ActivityFeedCard";

function Dashboard() {
  return (
    <>
      <DashboardLayout
        title="Transaction"
      
      >
        <div className="hidden lg:block">

          <WidgetCard title="Activity Feed">
            <ActivityFeedCard />
            <ActivityFeedCard />
            <ActivityFeedCard />
          </WidgetCard>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
