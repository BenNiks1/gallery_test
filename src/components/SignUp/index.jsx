import React from "react";
import { Button, Modal, Form } from "antd";
import { Input } from "../Input";
import axios from "axios";
import { connect } from "react-redux";

const SignUp = ({ clientId, clientSecret }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  // const [res, setRes] = React.useState([]);

  const showModal = () => {
    setVisibleModal(true);
  };
  const hideModal = () => {
    setVisibleModal(false);
  };

  const onFinish = (values) => {
    const body = `grant_type=password&username=${values.username}&password=${values.password}&client_id=${clientId}&client_secret=${clientSecret}`;
    // const body = new URLSearchParams({
    //   client_id: clientId,
    //   grant_type: "password",
    //   password: values.password,
    //   username: values.username,
    //   client_secret: clientSecret,
    // });

    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("/oauth/v2/token", body, options)
      .then((res) => console.log(res))
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });

    setVisibleModal(false);
  };
  return (
    <React.Fragment>
      <Button onClick={showModal}>Login</Button>
      <Modal
        title="Register"
        visible={visibleModal}
        onCancel={hideModal}
        footer={null}
      >
        <Form name="register" onFinish={onFinish}>
          <Input label={"username"} name={"username"} required={true} />
          <Input label={"password"} name={"password"} required={true} />
          <Button htmlType="submit">Ok</Button>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  clientId:
    state.fetchedData.newClient.id + "_" + state.fetchedData.newClient.randomId,
  clientSecret: state.fetchedData.newClient.secret,
});

export default connect(mapStateToProps)(SignUp);
