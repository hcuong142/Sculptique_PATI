import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div >
            <Header />
            <div >
                <div >{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
