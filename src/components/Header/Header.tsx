import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { GithubFilled } from '@ant-design/icons';
export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <GithubFilled className={styles.icon} />
            </Link>
            <h1 className={styles.title}>GitHub Search</h1>
        </header>
    )
}