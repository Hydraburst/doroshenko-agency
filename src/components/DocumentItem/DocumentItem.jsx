import { useState } from 'react';
import styles from './Document.module.scss';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Document = (props) => {
  const [image, setImage] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteHandler = (e) => {
    props.onDelete(e.target.id);
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      handleClose();
    }
  };

  return (
    <>
      <div className={styles.documentItemWrap}>
        {image && (
          <img
            src={image}
            alt={`Document ${props.number}`}
            className={styles.imagePreview}
          />
        )}
        <p>Document {props.number}</p>
        <div className={styles.moreOptions} onClick={handleClick}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <label
              htmlFor={`upload-${props.number}`}
              className={styles.uploadLabel}
            >
              Load image
            </label>
            <input
              type="file"
              id={`upload-${props.number}`}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </MenuItem>
          <MenuItem onClick={deleteHandler} id={props.number}>
            Delete
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Document;
