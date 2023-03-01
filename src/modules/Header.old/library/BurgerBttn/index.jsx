import styles from './index.module.scss';

const BurgerBttn = ({value, onClick}) => {
  return (
    <div
      className={
        styles.burgerBtn + (value ? ' ' + styles.burgerBtn_active : '')
      }
      onClick={() => onClick(!value)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBttn;