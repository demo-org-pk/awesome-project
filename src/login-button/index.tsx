import React from 'react';

interface Props {
    onClick: () => void;
}

const LoginButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button onClick={onClick} className="login-button">
            Logim
        </button>
    );
};

export default LoginButton;
