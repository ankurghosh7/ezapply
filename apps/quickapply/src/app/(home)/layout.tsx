import HomeHeader from "../../components/HomeHeader";
import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-5 md:px-20 ">
      <HomeHeader />
      {children}
    </div>
  );
}

export default HomeLayout;
