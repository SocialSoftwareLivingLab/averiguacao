import { useRouter } from 'next/router';

const LandingPage = () => {
    const router = useRouter();

    const navigateTo = (route) => {
        router.push(`/${route}`);
    };

    return (
        <div>
            <div>
                <h1>Welcome to Your App</h1>
                <div>
                    <button onClick={() => navigateTo('processos')}>Processos</button>
                    <button onClick={() => navigateTo('bancas')}>Bancas</button>
                    <button onClick={() => navigateTo('candidatos')}>Candidatos</button>
                    <button onClick={() => navigateTo('usuarios')}>Usuários</button>
                </div>
            </div>
            <div>
                {/* Content area */}
            </div>
        </div>
    );
};

export default LandingPage;