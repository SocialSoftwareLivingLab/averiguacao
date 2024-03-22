import { useRouter } from 'next/router';
import styles from '../styles/Landing.module.css'; // Import CSS module for styling

const LandingPage = () => {
    const router = useRouter();

    const handleRedirect = (route) => {
        router.push(route);
    };

    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <h1 className={styles.title}>Sistema de Averiguação Unicamp</h1>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.sidebar}>
                    <div className={styles.sidebarItem} onClick={() => handleRedirect('/processos')}>
                        <img src="/placeholder-icon.svg" alt="Placeholder Icon" className={styles.icon} />
                        <span>Processos</span>
                    </div>
                    <div className={styles.sidebarItem} onClick={() => handleRedirect('/bancas')}>
                        <img src="/placeholder-icon.svg" alt="Placeholder Icon" className={styles.icon} />
                        <span>Bancas</span>
                    </div>
                    <div className={styles.sidebarItem} onClick={() => handleRedirect('/candidatos')}>
                        <img src="/placeholder-icon.svg" alt="Placeholder Icon" className={styles.icon} />
                        <span>Candidatos</span>
                    </div>
                    <div className={styles.sidebarItem} onClick={() => handleRedirect('/usuarios')}>
                        <img src="/placeholder-icon.svg" alt="Placeholder Icon" className={styles.icon} />
                        <span>Usuários</span>
                    </div>
                    <div className={styles.userInfo}>
                        <span>John Doe</span>
                        <button className={styles.logoutButton}>Sair</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
