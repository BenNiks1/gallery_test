import React from "react";
import { useSelector, connect } from "react-redux";
import { Modal, Pagination } from "antd";

const Gallary = ({ filtredPhoto }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  console.log(filtredPhoto);
  const photos = useSelector((state) => state.fetchedData.photos.data);

  const showModal = () => {
    setVisibleModal(true);
  };
  const hideModal = () => {
    setVisibleModal(false);
  };
  return (
    <section className="gallary container">
      {filtredPhoto &&
        filtredPhoto.map(({ image }) => (
          <img
            className="gallary__img"
            onClick={showModal}
            src={image.name}
            alt={image.id}
            key={image.id}
          />
        ))}

      <Modal
        visible={visibleModal}
        onCancel={hideModal}
        footer={null}
        closable={false}
      >
        <p>123</p>
      </Modal>
      <Pagination defaultCurrent={1} total={200} showSizeChanger={false} />
    </section>
  );
};

const mapStateoProps = (state) => {
  return {
    filtredPhoto: state.fetchedData.photos.data,
  };
};

export default connect(mapStateoProps)(Gallary);
