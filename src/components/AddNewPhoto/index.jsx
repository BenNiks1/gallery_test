import React from "react";
import { Button, Modal, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
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
    const data = new FormData();
    data.append("file", values.upload[0].originFileObj);

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    axios.post("/api/media_objects", data, options);
    setVisibleModal(false);
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
          <Form.Item
            name="upload"
            label="Upload"
            rules={[
              {
                required: true,
                message: `Please upload your image!"`,
              },
            ]}
            valuePropName="file"
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
