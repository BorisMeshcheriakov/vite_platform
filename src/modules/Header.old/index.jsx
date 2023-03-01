import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import useUser from 'library/hooks/common/user/useUser';
import useUser from 'library/hooks/user/useUser';
import useRouter from 'library/hooks/common/useRouter';
// import useSettings from 'library/hooks/common/settings/useSettings';

import Authorization from 'library/components/common/modalAuthorization';

import Notification from 'library/components/common/popups/Notification';

import logo from 'resources/icons/Logo.svg';

import sharedStyles from 'resources/grid/index.module.scss';
import styles from './index.module.scss';

import Notifications from './library/Notifications';

import Cart from './frames/Cart';
import ProfileMenu from './frames/ProfileMenu';
import MobileHeader from './frames/MobileHeader';
import MobileMenu from './frames/MobileMenu';
import CookieAgreement from '../../library/components/common/modals/CookieAgreement';

import { selectModules } from 'library/redux/common';
import { useAppSelector } from 'library/hooks/common/reduxTypedHooks';

const Header = () => {
	const [menuHidden, setMenuHidden] = useState(false);
	// const { user, isAuth, logout, login } = useUser();
	const user = useUser();
	const { location } = useRouter();

	const modules = useAppSelector(selectModules);

	console.log(user.isAuth);

	return (
		<div className={styles.wrapper}>
			<div className={sharedStyles.container}>
				<div className={styles.header}>
					<NavLink to={'/'} className={styles.logo}>
						<img src={logo} className={styles.logoCoach} alt="" />
					</NavLink>
					<div className={styles.mainMenu}>
						{modules
							?.filter((module) => module.settings.menu === 'main')
							.sort((a, b) => a.settings.order - b.settings.order)
							.map((module) => (
								<span className={styles.mainMenu__item} key={module.code}>
									<NavLink
										// isActive={item.is_active}
										activeClassName={styles.mainMenu__item_active}
										to={`/${module.code}`}
									>
										{module.verbose_name}
									</NavLink>
								</span>
							))}
					</div>
					<div className={styles.personal}>
						{/* <Cart /> */}
						{user.isAuth && (
							<>
								<Notifications />
								<ProfileMenu
								// menu={userMenu}
								// {...{ logout, user }}
								/>
							</>
						)}
						{!user.isAuth &&
							location.pathname.indexOf('/program/program/subscribe') === -1 &&
							location.pathname.indexOf('/subscribe/registration') === -1 && (
								<div className={styles.personal__name}>
									<div className={styles.personal__name_comeIn}>{'Войти'}</div>
								</div>
							)}
					</div>
				</div>
				{/* <MobileHeader
					{...{
						setMenuHidden,
						menuHidden,
						// dmenu,
						isAuth,
						location,
						login,
					}}
				/> */}
				{/* <MobileMenu
					{...{
						menuHidden,
						setMenuHidden,
						// menu,
						// userMenu,
						logout,
					}}
				/> */}
			</div>
			<Authorization />
			<Notification />
		</div>
	);
};

export default Header;
