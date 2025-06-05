import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const response = await fetch("https://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                setError("Erreur lors de la connexion");
            } else {
                localStorage.setItem("token", data.token);
                window.location.href = "/";
            }
        } catch (err) {
            setError("Erreur de connexion",);
            console.log(err);
        }
    };

    return (
        <div className="w-128 my-14 mx-auto border p-10 border-[#ddd] rounded-lg">
            <h2 className="text-2xl text-center my-5">Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>
                        Email :
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mt-2 border border-gray-500 rounded"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label>
                        Mot de passe :
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full p-2 mt-2 border border-gray-500 rounded"
                        />
                    </label>
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Se connecter
                </button>
            </form>
        </div>
    );
}

export default Login;