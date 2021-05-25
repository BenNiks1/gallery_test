import React from "react";
import { Button, Modal, Form } from "antd";
import { Input } from "../Input";
import axios from "axios";
import { connect } from "react-redux";

const SignUp = ({ clientId, clientSecret }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const showModal = () => {
    setVisibleModal(true);
  };
  const hideModal = () => {
    setVisibleModal(false);
  };

  const onFinish = (values) => {
    axios
      .post("/oauth/v2/token", {
        clientId: clientId,
        grant_type: 'password',
        password: values.password,
        username: values.username,
        refresh_token:'',
        clientSecret: clientSecret,
      })
      
    setVisibleModal(false);
  };

  return (
    <React.Fragment>
      <Button onClick={showModal}>SignUp</Button>
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
    state.fetchedData.newClient.clientId +
    "_" +
    state.fetchedData.newClient.randomId,
  clientSecret: state.fetchedData.newClient.sexret,
});

export default connect(mapStateToProps)(SignUp);
