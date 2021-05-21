import React from "react";
import { Tabs } from "antd";
import { useDispatch } from "react-redux";

import "antd/dist/antd.css";
import { fetchPhotos, newPhoto, popularPhoto } from "../../redux/actions";

const { TabPane } = Tabs;
export const HeaderNav = () => {
  const dispatch = useDispatch();


  return (
    <Tabs
      defaultActiveKey="new"
      onChange={(activeKey) => {
        dispatch(fetchPhotos(activeKey))
      }}
    >
      <TabPane tab="New" key="new"/>
      <TabPane tab="Popular" key="popular"/>
    </Tabs>
  );
};
