import React from 'react';
import './ToolBar.css';

export default function ToolBar() {
    function onLogin() {
        alert('Entrando...');
    }
    function onCadastrar() {
        alert('Indo para a página de cadastro...');
    }

    return (
        <div className="toolbar-container">
            <button onClick={onLogin}>
                Entrar
            </button>
            <button onClick={onCadastrar}>
                Cadastrar
            </button>
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}