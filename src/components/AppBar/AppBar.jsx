import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.header_box}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}

export default AppBar;