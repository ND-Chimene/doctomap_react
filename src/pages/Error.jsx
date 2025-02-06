function Error() {
    return ( <main className="flex flex-col items-center justify-center mt-30 gap-10">
        <h1 className="text-4xl">Cette page n&apos;existe pas</h1>
        <a href="/" className="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Retourner à la page d&apos;accueil
        </a>

    </main> );
}

export default Error;