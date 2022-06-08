import React from "react";
import AppHeader from "../../commons/header/header";
import FieldSideBar from "./fields-drawer/FieldSideBar";

const CreateCV: React.FC = () => {
  return (
    <>
      <div>
        <AppHeader />
        <div>
          <FieldSideBar />
        </div>
      </div>
    </>
  );
};

export default CreateCV;
