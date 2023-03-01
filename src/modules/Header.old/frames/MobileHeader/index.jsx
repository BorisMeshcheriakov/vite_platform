import {useMemo} from 'react';
import { NavLink } from "react-router-dom";
import BurgerBttn from "../../library/BurgerBttn";

import logo from 'resources/icons/Logo.svg'

import styles from './index.module.scss';

const MobileHeader = ({setMenuHidden, menuHidden, menu, isAuth, location, openModalAuthorize}) => {

    const mobileTitle = useMemo(() => {
          const currentMenuItem = menu.find(item => item.path == location.pathname);
          return currentMenuItem?.title;
      },[menu, location])

    return(
        <div className={styles.headerMobile}>
        {
          isAuth
          ?
            <BurgerBttn onClick={setMenuHidden} value={menuHidden}/>
          :
            <NavLink to={"/"} className={styles.logo}>
              <img src={logo} className={styles.logoCoach} alt=""/>
            </NavLink>
        }
        <div className={styles.headerMobile__title}>
          {mobileTitle}
        </div>
        <div className={styles.personal}>
            {
              !isAuth && location.pathname.indexOf('/program/program/subscribe') === -1 && location.pathname.indexOf('/subscribe/registration') === -1 &&
                <div className={styles.personal__name} onClick={() => openModalAuthorize()}>
                  <div className={styles.personal__name_comeIn}>{"Войти"}</div>
                </div>
            }
            </div>
      </div>
    );
}

export default MobileHeader;