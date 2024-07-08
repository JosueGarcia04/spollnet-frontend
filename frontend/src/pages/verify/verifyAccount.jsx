import { Link } from 'react-router-dom';
export const VerifyAccount = () => {
    return(
        <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-pink-500 text-4xl mb-4">Verifica tu cuenta</h1>
        <Link to={"/"}>
            <img src="public/logo2.png" className="w-40" alt="spollnet" />
        </Link>
        <p className="mb-4 text-pink-400">¡Revisa tu correo! Hemos enviado un código de verificación.</p>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Código de verificación"
            
            onChange={(e) => setVerificationCode(e.target.value)}
            className="mb-4 p-2 rounded border-2 border-pink-500 text-black"
          />
          <button type="submit" className="bg-pink-500 text-white p-2 rounded">Verificar cuenta</button>
        </form>
      </div>
    );
}

export default VerifyAccount;