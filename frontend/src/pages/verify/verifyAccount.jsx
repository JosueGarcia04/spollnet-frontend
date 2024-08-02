import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const VerifyAccount = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Código de verificación enviado:', verificationCode);
  };

  return (
    <div>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center text-white">
        <h2 className="mb-12 text-center text-5xl font-extrabold text-[#E31FAE]">Verifica tu cuenta</h2>
        <Link to="/">
          <img src="public/logo2.png" className="w-80" alt="spollnet" />
        </Link>
        <p className="mb-4 text-pink-400">¡Revisa tu correo! Hemos enviado un código de verificación.</p>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Código de verificación"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="mb-4 p-2 rounded border-2 border-pink-500 text-black"
          />
          <button type="submit" className="bg-pink-500 text-white p-2 rounded">Verificar cuenta</button>
        </form>
      </div>
    </div>
  );
}

export default VerifyAccount;