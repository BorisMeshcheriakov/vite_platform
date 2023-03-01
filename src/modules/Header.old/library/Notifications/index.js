import { useState } from 'react'
import cn from 'classnames';
import useRouter from 'library/hooks/common/useRouter';
import useNotifications from 'library/hooks/common/notifications/useNotifications';
import styles from './index.module.scss'
import Notification from './frames/Notification'

const Notifications = () => {
  const { history } = useRouter();
  const {notifications, isNew, getTitle} = useNotifications();

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div
    className={cn(styles.notice, isNew && styles.notice__pointer)}
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
  >
    <div className={styles.notice__bellWrapper} onClick={() => history.push('/notifications')}>
      <div className={styles.icon}/>
    </div>
    <div className={cn(styles.notice__list, isOpen && styles.notice__list__enabled)}>
      {
        notifications.length === 0 && <div className={styles.notice__empty}>У Вас нет уведомлений</div>
      }
      {
        notifications.map((item, index) =>
          <Notification title={getTitle(item)} item={item} key={index} open={() => history.push(`/notifications/recommend-program/${item.metadata.program_id}`)}/>
        )
      }
    </div>
  </div>
  );
}

export default Notifications;