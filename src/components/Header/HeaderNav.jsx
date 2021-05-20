import React from "react";
import { Tabs } from "antd";

import "antd/dist/antd.css";

const { TabPane } = Tabs;
export const HeaderNav = () => {
  return (
    <Tabs defaultActiveKey='1'>
      <TabPane tab="New" key="1"></TabPane>
      <TabPane tab="Popular" key="2"></TabPane>
    </Tabs>
  );
};
