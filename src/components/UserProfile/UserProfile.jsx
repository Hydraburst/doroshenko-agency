import { useState } from 'react';
import styles from './UserProfile.module.scss';
import userPhoto from '../../assets/img/user_img.svg';
import userQr from '../../assets/icons/qr_icon.svg';
import qrCode from '../../assets/img/qr_code.svg';

export const UserProfile = () => {
  const [inputValue, setInputValue] = useState('Leonardo Di Caprio');
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    setIsReadOnly(false);
  };

  const toggleReadOnly = () => {
    setIsReadOnly((prevState) => !prevState);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsReadOnly(true);
    }
  };

  const handleFlip = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
      onClick={handleFlip}
    >
      <div className={styles.cardFront}>
        <input
          type="text"
          value={inputValue}
          onChange={inputValueHandler}
          onBlur={toggleReadOnly}
          onClick={handleInputClick}
          placeholder={inputValue}
          readOnly={isReadOnly}
          onKeyDown={handleKeyDown}
        />
        <div className={styles.line}></div>
        <div className={styles.userProfile}>
          <img src={userPhoto} alt="user photo" />
          <div className={styles.qrSection}>
            <p className={styles.qrText}>Personal QR code</p>
            <img src={userQr} alt="user qr" />
          </div>
        </div>
        <div className={styles.moreOptions}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.cardBack}>
        <img src={qrCode} alt="QR code" className={styles.qrCode} />
        <div className={styles.qrSection}>
          <p className={styles.qrText}>My Photo</p>
          <img src={userQr} alt="user qr" />
        </div>
      </div>
    </div>
  );
};
