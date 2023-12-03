import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <label>React Rent-a-car © {new Date().getFullYear()}</label>
        </footer>
    );
}