import React from "react";
import { Tabs } from "antd";
import { useDispatch } from "react-redux";
import {  setActiveKey, setPage } from "../../redux/actions";

import "antd/dist/antd.css";

const { TabPane } = Tabs;
export const HeaderNav = () => {
  const dispatch = useDispatch();

  return (
    <Tabs
      defaultActiveKey="new"
      onChange={(activeKey) => {
        dispatch(setActiveKey(activeKey));
        dispatch(setPage(1));
      }}
    >
      <TabPane tab="New" key="new" />
      <TabPane tab="Popular" key="popular" />
    </Tabs>
  );
};

