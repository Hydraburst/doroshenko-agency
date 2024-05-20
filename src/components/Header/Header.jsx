import styles from "./Header.module.scss"
import searchIcon from "../../assets/icons/search_icon.svg"
import notificationIcon from "../../assets/icons/notifictaion_icon.svg"
import settingsIcon from "../../assets/icons/settings_icon.svg"
import userImg from "../../assets/icons/user_icon.svg"

export const Header = () => {
  return (
    <>
    <div className={styles.headerWrap}>
        <div className={styles.contentLeft}>
          <div className={styles.burgerMenu}>
              <div className={styles.burgerLine}></div>
              <div className={styles.burgerLine}></div>
              <div className={styles.burgerLine}></div>
          </div>
          <p className={styles.profileTitle}>My profile</p>
        </div>
        <div className={styles.contentRight}>
            <div className={styles.contentUtils}>
              <img src={searchIcon} alt="search" />
              <img src={notificationIcon} alt="notifications" />
              <img src={settingsIcon} alt="settings" />
            </div>
            <div className={styles.contentUser}>
              <img src={userImg} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}
