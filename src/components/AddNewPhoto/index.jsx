import React from "react";
import { Button, Modal, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Input } from "../Input";
import axios from "axios";
import { connect } from "react-redux";

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AddNewPhoto = ({ token }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const onFinish = (values) => {
    const body = {
      name: values.name,
      dateCreate: "2021-05-25T21:46:49.055Z",
      description: values.description,
      new: true,
      popular: true,
      image: values.upload[0],
    };

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };

    axios.post("/api/photos", body, options);
  };

  return (
    <>
      <Button onClick={() => setVisibleModal(true)}>Add Photo</Button>
      <Modal
        title="Upload"
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Input label={"name"} name={"name"} required={true} />
          <Input label={"description"} name={"description"} required={true} />
          <Form.Item
            name="upload"
            label="Upload"
            rules={[
              {
                required: true,
                message: `Please upload your image!"`,
              },
            ]}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="logo"
              beforeUpload={(file, filelist) => false}
              maxCount={1}
              listType="picture"
            >
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Button htmlType="submit">Ok</Button>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.fetchedData.currentUser.access_token,
});

export default connect(mapStateToProps)(AddNewPhoto);
