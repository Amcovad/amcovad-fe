"use client";
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
//data
import newActionsData from "@/data/dashboard/newActions";
import suggestedFeedData from "@/data/dashboard/suggestedFeed";

import NewFriendToast from "@/components/dashboard/component/NewFriendToast";
import NewActionCard from "@/components/dashboard/component/NewActionCard";
import AttentionCard from "@/components/dashboard/component/AttentionCard";
import WidgetCard from "@/components/dashboard/component/card/WidgetCard";
import ActivityFeedCard from "@/components/dashboard/component/card/ActivityFeedCard";
import SuggestedFeedCard from "@/components/dashboard/component/card/SuggestedFeedCard";
import TimelineCard from "@/components/dashboard/component/card/TimelineCard";
import { useAppSelector } from "../../redux/hooks";
import connectionService from "../../services/connection";
import { toast, ToastContainer } from "react-toastify";
import TransactionInvitations from "@/components/dashboard/TransactionInvitations";

const SideWidgetComponents = () => {
  return (
    <>
      <div className="hidden lg:block">
        <AttentionCard />

        <WidgetCard title="Activity Feed">
          <ActivityFeedCard />
          <ActivityFeedCard />
          <ActivityFeedCard />
        </WidgetCard>
      </div>
      <div className=" mb-10 lg:mb-[156px]">
        <WidgetCard title="Suggested for you">
          {suggestedFeedData.map(({ subTitle, image, title, url }, index) => {
            return (
              <SuggestedFeedCard
                key={index}
                subTitle={subTitle}
                title={title}
                image={image}
                url={url}
              />
            );
          })}
        </WidgetCard>
      </div>
    </>
  );
};
function Dashboard() {
  const user = useAppSelector((state) => state.auth.user);
  const [pendingConnections, setPendingConnections] = React.useState([]);

  const removeConection = (id: string) => {
    setPendingConnections(
      pendingConnections.filter((conn: any) => conn.id !== id)
    );
  };

  React.useEffect(() => {
    const fetchPendingConnections = async () => {
      try {
        const data = await connectionService.getPendingConnections();
        console.log(data);
        setPendingConnections(data);
      } catch (error: any) {
        toast.error("Unable to fetch connections list");
      }
    };

    fetchPendingConnections();
  }, []);

  console.log(user);

  return (
    <>
      <DashboardLayout
        title={`Welcome ${user?.firstName},`}
        sideWidget={<SideWidgetComponents />}
      >
        <>
          {pendingConnections.length !== 0
            ? pendingConnections
                .filter((conn: any) => conn.user.id !== user.id)
                .map((conn: any) => {
                  return (
                    <NewFriendToast
                      key={conn.id}
                      name={conn?.user?.firstName}
                      connectionId={conn.id}
                      successCallback={removeConection}
                    />
                  );
                })
            : null}
          {/* <NewFriendToast /> */}
          <div className="items-center lg:gap-x-2 xl:gap-x-3 hidden lg:flex py-4 lg:pr-10 remove-right-padding xl:pr-0 pt-6">
            {newActionsData.map(({ color, icon, title, textColor }, index) => {
              return (
                <NewActionCard
                  key={index}
                  color={color}
                  title={title}
                  icon={icon}
                  textColor={textColor}
                />
              );
            })}
          </div>
          <div className="mb-4">
            <TransactionInvitations />
          </div>

          <div className="flex items-center lg:hidden gap-x-4 pb-4 px-2 lg:pt-6">
            {newActionsData
              .slice(0, 2)
              .map(({ color, icon, title, textColor }, index) => {
                return (
                  <NewActionCard
                    key={index}
                    color={color}
                    title={title}
                    icon={icon}
                    textColor={textColor}
                  />
                );
              })}
          </div>

          {/* <div className="lg:hidden block">
            <AttentionCard />
          </div>
          <div className="hidden lg:flex">
            <TimelineCard />
          </div>
          <TimelineCard /> */}
        </>
        <ToastContainer />
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
