import styles from './Header.module.scss';
function Header() {
    return (
        <header>
            <div className={styles.secretHeaderWhole}>
                <img
                    alt=" "
                    className={styles.secretHeader}
                    src="//trysculptique.com/cdn/shop/files/gempages_567005027885909033-610eea12-3864-40f1-b0bb-802237c7296c.png?v=1756727579"
                />
            </div>
        </header>
    );
}

export default Header;
