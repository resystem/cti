import React from 'react';

const ContentModal = ({ backgroundColor, hide, onClose }) => (
  <div onClick={onClose} className={hide ? 'modal-wrapper __hide' : 'modal-wrapper'}>
    <div
      onClick={(event) => event.stopPropagation()}
      className={"modal"}
      style={{ backgroundColor }}
    />
  </div>
);

ContentModal.defaultProps = {
  backgroundColor: '#ffffff',
  hide: true,
}

export default ContentModal;
