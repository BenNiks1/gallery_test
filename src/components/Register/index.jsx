import React from "react";
import { Button, Modal, Form } from "antd";
import { Input } from "../Input";
import axios from "axios";
import dayjs from "dayjs";

const Register = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const onFinish = (values) => {
    const date = new Date().getTime();

    const body = {
      email: values.email,
      phone: values.phone,
      fullName: values.fullName,
      password: values.password,
      username: values.username,
      birthday: dayjs(date).toISOString(),
      roles: ["ROLE_USER"],
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/api/users", body, options).then(setVisibleModal(false));
  };
  return (
    <React.Fragment>
      <Button onClick={() => setVisibleModal(true)}>Register</Button>
      <Modal
        title="Register"
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
        footer={null}
      >
        <Form name="register" onFinish={onFinish}>
          <Input label={"fullName"} name={"fullName"} required={true} />
          <Input label={"username"} name={"username"} required={true} />
          <Input label={"email"} name={"email"} required={true} />
          <Input label={"phone"} name={"phone"} required={true} />
          <Input label={"password"} name={"password"} required={true} />
          <Button htmlType="submit">Ok</Button>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default Register;
