import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import cn from 'classnames';

import Icon from '../../library/Icon';

import st from './index.module.scss';

const ProfileMenu = ({ menu, user, logout }) => {
	const [isContactsOpened, setIsContactsOpened] = useState(false);
	const history = useHistory();

	return (
		<div className={st.container}>
			<div className={st.personal__name} onClick={() => setIsContactsOpened(!isContactsOpened)}>
				<div
					className={cn(st.menu__overlay, isContactsOpened && st.menu__overlay__active)}
					onClick={() => setIsContactsOpened(!isContactsOpened)}
				/>
				<div className={st.icon} />
				<div
					className={cn(st.menu, isContactsOpened && st.menu__active)}
					onMouseEnter={() => setIsContactsOpened(true)}
				>
					<div className={st.menu__user} onClick={() => history.push('/personal')}>
						<div className={st.menu__user__photo}>
							<img src={user.photo} />
						</div>
						<h2>{user.first_name + ' ' + user.last_name}</h2>
					</div>

					<span />

					{/* {menu.map((item) => (
						<div className={st.menu__item} key={item.path}>
							<Icon icon={item.icon} />
							<Link className={st.menu__link} to={item.path}>
								<span>{item.title}</span>
							</Link>
							<span />
						</div>
					))} */}
					<button className={st.menu__item} onClick={logout}>
						<Icon icon={'exit'} />
						<span className={st.menu__link}>Выход</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileMenu;
