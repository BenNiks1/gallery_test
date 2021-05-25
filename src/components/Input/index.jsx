import React from "react";
import { Form, Input as InputAntd } from "antd";

export const Input = ({ label, name, required }) => (
  <React.Fragment>
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: `Please input your ${name}!"`,
        },
      ]}
    >
      {name === "password" ? <InputAntd.Password /> : <InputAntd />}
    </Form.Item>
  </React.Fragment>
);
