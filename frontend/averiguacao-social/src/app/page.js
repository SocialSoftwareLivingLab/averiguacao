import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/login'); // Redirect to login page
    }, []);

    return null; // No content to render on this page
};

export default Home;
