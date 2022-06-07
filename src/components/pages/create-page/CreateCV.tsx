import React from "react";
import AppHeader from "../../commons/header/header";
import FieldsDrawer from "./fields-drawer/FieldsSideBar";

const CreateCV: React.FC = () => {
  return (
    <>
      <div>
        <AppHeader />
        <div>
          <FieldsDrawer />
        </div>
      </div>
    </>
  );
};

export default CreateCV;
