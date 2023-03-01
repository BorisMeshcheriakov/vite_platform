import cn from 'classnames';
import { NavLink, Link } from 'react-router-dom';
import Notifications from '../../library/Notifications';
import BurgerBttn from '../../library/BurgerBttn';
import Icon from '../../library/Icon';
import logo from 'resources/icons/Logo.svg';
import styles from './index.module.scss';

const MobileMenu = ({ menuHidden, setMenuHidden, menu, userMenu, logout }) => {
	return (
		<div className={cn(styles.menuBurger, menuHidden && styles.menuBurger_active)}>
			<div className={styles.menuBurger__header}>
				<BurgerBttn onClick={setMenuHidden} value={menuHidden} />
				<div className={styles.headerMobile__title}>
					<NavLink to={'/'} className={styles.logo} onClick={() => setMenuHidden(!menuHidden)}>
						<img src={logo} className={styles.logoCoach} alt="" />
					</NavLink>
				</div>
				<div className={styles.menuBurger__noticeWrapper} onClick={() => setMenuHidden(!menuHidden)}>
					<Notifications />
				</div>
			</div>
			<div className={styles.menuBurger__contentWrapper} onClick={() => setMenuHidden(!menuHidden)}>
				<div className={styles.menuBurger__content}>
					<div className={styles.menuBurger__content_main}>
						{menu.map(item => (
							<NavLink to={item.path} key={item.path}>
								<Icon icon={item.icon} />
								{item.title}
							</NavLink>
						))}
					</div>
					<div className={styles.menuBurger__content_personal}>
						{userMenu.map(item => (
							<Link to={item.path} key={item.path}>
								<Icon icon={item.icon} />
								{item.title}
							</Link>
						))}
						<div onClick={logout}>
							<Icon icon={'exit'} />
							Выйти
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
