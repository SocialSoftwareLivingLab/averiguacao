

import styles from '../styles/Login.module.css'; // Import CSS module for styling

const LoginPage = () => {
    const router = useRouter();

    const handleLogin = () => {
        window.location.href = '/landing';
    };

    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
            <button onClick={handleLogin}>Login</button>
            </div>
            <div className={styles.content}>
                <img src="/your-image.jpg" alt="Your Image" className={styles.image} />
            </div>
            <div className={styles.bottombar}>
                <p>Logos and Text Information</p>
            </div>
        </div>
    );
};

export default LoginPage;
