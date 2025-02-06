import { useState } from "react";
import HeaderText from "../common/HeaderText";
import DashboardLayout from "../layout/DashboardLayout";
import ActivityLog from "./ActivityLog";
import CategorySettings from "./category/CategorySettings";
import CommentSettings from "./CommentSettings";
import ManagePassword from "./ManagePassword";
import { TbCategoryFilled } from "react-icons/tb";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa6";
import { LuActivity } from "react-icons/lu";

const SettingsComponent = () => {
  const [openComponent, setOpenComponent] = useState<number>(1);
  const tabData = [
    {
      id: 1,
      title: "Manage Category",
      Component: CategorySettings,
      Icon: TbCategoryFilled,
    },
    {
      id: 2,
      title: "Manage Password",
      Component: ManagePassword,
      Icon: RiLockPasswordFill,
    },
    {
      id: 3,
      title: "Manage Comments",
      Component: CommentSettings,
      Icon: FaComments,
    },
    {
      id: 4,
      title: "Activity Log",
      Component: ActivityLog,
      Icon: LuActivity,
    },
  ];

  const handleShowComponent = (id: number) => {
    setOpenComponent(id);
  };
  return (
    <DashboardLayout>
      <HeaderText text="Settings" />

      <section className="mt-8 lg:flex gap-6 overflow-x-scroll">
        <div className="w-[100%]  lg:w-[20%] bg-white p-2 md:flex md:flex-wrap md:gap-4 lg:block">
          {tabData.map((tab) => {
            return (
              <div
                key={tab.id}
                className={`mb-[20px] bg-white shadow-md p-1 h-[40px] ${
                  openComponent === tab.id
                    ? " border-l-[2px] border-l-primary"
                    : ""
                }`}
              >
                <div
                  className={`ml-8 ${
                    openComponent === tab.id ? "text-primary font-semibold" : ""
                  }`}
                >
                  <p
                    onClick={() => {
                      handleShowComponent(tab.id);
                    }}
                    className={`cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                      openComponent === tab.id
                        ? "text-primary font-bold"
                        : "font-medium"
                    }`}
                  >
                    <tab.Icon />
                    {tab.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[100%]  lg:w-[80%] bg-white p-3 rounded-md h-[600px] mt-8 lg:mt-0">
          <div className="">
            {tabData.map((tab) => {
              return (
                <div
                  key={tab.id}
                  className={openComponent === tab.id ? "block" : "hidden"}
                >
                  <tab.Component />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default SettingsComponent;
