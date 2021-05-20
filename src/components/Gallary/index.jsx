import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { fetchPhotos } from "../../redux/actions";

export const Gallary = () => {
  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);
  const [visibleModal, setVisibleModal] = React.useState(false);

  const dispatch = useDispatch();
  const photos = useSelector((state) => state.dataReducer.photos.data);

  const showModal = () => {
    setVisibleModal(true)
  };
  const hideModal = () => {
    setVisibleModal(false)
  }

  return (
    <section className="gallary container">
      {photos &&
        photos.map(({ image }) => (
          <img
            className="gallary__img"
            onClick={showModal}
            src={image.name}
            alt={image.id}
            key={image.id}
          />
        ))}
        <Modal visible={visibleModal} onCancel={hideModal} footer={null} closable={false}>
          <p>123</p>
        </Modal>
    </section>
  );
};
