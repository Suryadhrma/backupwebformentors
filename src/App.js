import React, { useEffect, useState } from 'react';
import api from './api';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        api.get('/')
            .then((response) => setMessage(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-blue-500">{message}</h1>
        </div>
    );
}

export default App;