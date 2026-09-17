import { Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import { SearchComponent } from "../components/Search/Search";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";

export default function Layout() {
    const navigate = useNavigate()
    const onSearch = (search: string) => {
        navigate(`/user/${search}`)
    }
    return (
        <div className={styles.layout}>
            <Header />
            <SearchComponent onSearch={onSearch}/>
            <Outlet />
        </div>
    )
}