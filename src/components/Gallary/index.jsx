import React from "react";
import { connect, useDispatch } from "react-redux";
import { Modal, Pagination } from "antd";
import { setPage } from "../../redux/actions";

const Gallary = ({ filtredPhoto }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const dispatch = useDispatch();
  
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
      <Pagination
        defaultCurrent={1}
        total={200}
        showSizeChanger={false}
        onChange={(page) => dispatch(setPage(page))}
      />
    </section>
  );
};

const mapStateoProps = (state) => {
  return {
    filtredPhoto: state.fetchedData.photos.data,
    page: state.fetchedData.page,
  };
};

export default connect(mapStateoProps)(Gallary);
