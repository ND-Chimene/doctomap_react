function Header() {
    const token = localStorage.getItem("token");
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <header className="text-center">
            <a href="/">
                <h1 className="text-8xl text-center my-3 dancing-script ">Doctomap</h1>
            </a>
            {!token || token === "null" ? (
                <a href="/login" className="mt-5">Se Connecter</a>
            ) : (
                <a href="/login" onClick={handleLogout} className="mt-5">Se deconnecter</a>
            )}
        </header>
    );
}

export default Header;