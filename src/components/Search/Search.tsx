import { Input } from "antd";
import type { GetProps } from 'antd';
import styles from './Search.module.css'

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

export const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => {
    return (
        <div className={styles.searchWrapper}>
            <Search placeholder="Digite o nome do usuário..." onSearch={onSearch} />
        </div>
    )
}