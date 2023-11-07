import RocketIcon from '../../assets/icons/Rocket';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <RocketIcon />

      <span>
        to
        <strong>do</strong>
      </span>
    </header>
  );
}

export default Header;
