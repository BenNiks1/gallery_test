import React from "react";
import { Button, Modal, Form } from "antd";
import { Input } from "../Input";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { currentUser, isAuthorized } from "../../redux/actions";

const SignUp = ({ clientId, clientSecret }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const body = `grant_type=password&username=${values.username}&password=${values.password}&client_id=${clientId}&client_secret=${clientSecret}`;

    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post("/oauth/v2/token", body, options)
      .then((res) => dispatch(currentUser(res.data)))
      .then(() => dispatch(isAuthorized(true)))
      .then(() => setVisibleModal(false));
  };
  return (
    <React.Fragment>
      <Button onClick={() => setVisibleModal(true)}>Login</Button>
      <Modal
        title="Login"
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
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
