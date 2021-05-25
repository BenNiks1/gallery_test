import React from "react";
import { Button, Modal, Form } from "antd";
import { Input } from "../Input";
import axios from "axios";
import { connect } from "react-redux";

const Logout = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const showModal = () => {
    setVisibleModal(true);
  };
  const hideModal = () => {
    setVisibleModal(false);
  };

  const onFinish = (values) => {
    // const body = `grant_type=password&username=${values.username}&password=${values.password}&client_id=${clientId}&client_secret=${clientSecret}`;
    const body = {
      //   client_id: clientId,
      //   grant_type: "password",
      email: values.email,
      phone: values.phone,
      fullName: "qweqweqwe",
      password: values.password,
      username: values.username,
      birthday: "2021-05-25T18:03:59.183Z",
      roles: ["ROLE_USER"],
      //   client_secret: clientSecret,
    }

    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("/api/users", body, options).then((res) => console.log(res)).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });;

    setVisibleModal(false);
  };
  return (
    <React.Fragment>
      <Button onClick={showModal}>Register</Button>
      <Modal
        title="Register"
        visible={visibleModal}
        onCancel={hideModal}
        footer={null}
      >
        <Form name="register" onFinish={onFinish}>
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

export default Logout;
