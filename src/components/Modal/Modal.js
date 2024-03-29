import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
// eslint-disable-next-line
const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    window.addEventListener('keydown', this.closeModalEsc);
  }

  componentWillUnmount() {
    // eslint-disable-next-line
    window.removeEventListener('keydown', this.closeModalEsc);
  }

  closeModalEsc = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      // eslint-disable-next-line
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
