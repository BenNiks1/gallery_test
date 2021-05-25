import React from "react";
import { connect, useDispatch } from "react-redux";
import { Modal, Pagination } from "antd";
import { setPage } from "../../redux/actions";

const Gallary = ({ photoName }) => {
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
      <div className="gallary__inner">
        {photoName &&
          photoName.map((item) => {
            return (
              <img
                className="gallary__img"
                onClick={showModal}
                src={`/media/${item.name}`}
                alt={item.name}
                key={item.id}
              />
            );
          })}
      </div>
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
    page: state.fetchedData.page,
    photoName:
      state.fetchedData.photos.data &&
      state.fetchedData.photos.data.map((item) => item.image),
  };
};

export default connect(mapStateoProps)(Gallary);
