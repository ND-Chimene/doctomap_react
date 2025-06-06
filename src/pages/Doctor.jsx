import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Doctor() {
    const [doctor, setDoctor] = useState(null);
    const { id } = useParams();
    const token = localStorage.getItem("token");

    const getDoctor = async () => {
        try {
            const response = await fetch(`https://127.0.0.1:8000/api/doctors/${id}`);
            const data = await response.json();
            setDoctor(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteDoctor = async () => {
        try {
            const response = await fetch(`https://127.0.0.1:8000/api/doctors/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": token,
                },
            });

            if (response.ok) {
                alert("Docteur supprimé avec succès");
                window.location.href = "/";
            } else {
                const data = await response.json();
                alert(`Erreur lors de la suppression du docteur : ${data.message || response.status}`);
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
            alert("Erreur de connexion au serveur");
        }
    };


    useEffect(() => {
        getDoctor();
    }, [id]);

    if (doctor === null) {
        return <main className="mx-10 mb-5"><p>Chargement...</p></main>;
    }

    return (
    <main className="mx-10 mb-5">
        <h1 className="underline text-2xl mb-5">Fiche docteur</h1>
        {!doctor.id ?
        (<p>Ce docteur n&apos;existe pas</p>) : (
            <>
            <div className="flex flex-row justify-center items-center gap-10 border p-4 rounded-md bg-zinc-100 mb-5" key={doctor.id}>
                <img className="w-42" src={doctor.image} alt={`${doctor.firstname} ${doctor.lastname}`} />
                <div>
                    <h2 className="text-2xl mb-2">{doctor.firstname} {doctor.lastname}</h2>
                    <h3 className="text-xl mb-5">{doctor.speciality}</h3>
                    <p>{doctor.address}, {doctor.zip} {doctor.city}</p>
                    <p>{doctor.phone}</p>
                </div>
            </div>
            {token && token !== "null" ?
            (
                <div className="flex flex-row justify-end gap-3">
                <button className="cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Modifier
                </button>
                <button onClick={deleteDoctor} className="cursor-pointer bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 border border-red-700 rounded">
                    Supprimer
                </button>
            </div>
        ) : ""
            }
            </>
        )}
    </main>);
}

export default Doctor;
