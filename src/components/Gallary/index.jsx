import React from "react";
import { connect, useDispatch } from "react-redux";
import { Modal, Pagination } from "antd";
import { fetchPhotos, setPage } from "../../redux/actions";

const Gallary = ({ photoList, countOfPages,page }) => {
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [modalPhotoItem, setModalPhotoItem] = React.useState([]);
  const dispatch = useDispatch();

  const showModal = (item) => {
    setVisibleModal(true);
    setModalPhotoItem(item);
  };
  const hideModal = () => {
    setVisibleModal(false);
  };


  return (
    <section className="gallary container">
      <div className="gallary__inner">
        {photoList &&
          photoList.map((item) => {
            return (
              <img
                className="gallary__img"
                onClick={() => {
                  showModal(item);
                }}
                src={`/media/${item.image.name}`}
                alt={item.image.name}
                key={item.image.id}
              />
            );
          })}
      </div>
      {visibleModal && (
        <Modal
          visible={visibleModal}
          onCancel={hideModal}
          footer={null}
          closable={false}
        >
          <img
            className="gallary__modal"
            src={`/media/${modalPhotoItem.image.name}`}
            alt={modalPhotoItem.image.name}
          />
          <h2>{modalPhotoItem.name}</h2>
          <p>{modalPhotoItem.description}</p>
        </Modal>
      )}
      {countOfPages && (
        <Pagination
          defaultCurrent={1}
          total={`${countOfPages}0`}
          current={page}
          showSizeChanger={false}
          onChange={(page) => dispatch(setPage(page))}
        />
      )}
    </section>
  );
};

const mapStateoProps = (state) => {
  return {
    page: state.localData.page,
    photoList:
      state.fetchedData.photos.data &&
      state.fetchedData.photos.data.map((item) => item),
    countOfPages: state.fetchedData.photos.countOfPages,
  };
};

export default connect(mapStateoProps)(Gallary);
