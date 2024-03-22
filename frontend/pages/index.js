import styles from '../styles/Login.module.css'; // Import CSS module for styling

const LoginPage = () => {

    const handleLogin = () => {
        window.location.href = '/landing';
    };

    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <h1 className={styles.title}>Sistema de Averiguação Unicamp</h1>
                <button onClick={handleLogin} className={styles.loginButton}>Entrar</button>
            </div>
            <div className={styles.content}>
                <img src="/your-image.jpg" alt="Your Image" className={styles.image} />
            </div>
            <div className={styles.bottombar}>
                <p>PLACEHOLDER</p>
            </div>
        </div>
    );
};

export default LoginPage;
