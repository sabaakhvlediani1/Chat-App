import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageDiv from "../../components/messages/MessageDiv";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter ">
      <Sidebar />
      <MessageDiv />
    </div>
  );
};

export default Home;
