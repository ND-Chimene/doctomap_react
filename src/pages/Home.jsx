import { useState, useEffect } from "react";

function Home() {
    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {
        try {
            const response = await fetch("https://127.0.0.1:8000/api/doctors");
            const data = await response.json();
            setDoctors(data.member);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDoctors();
    }, []);

    return (
    <main className="mx-10 mb-5">
        <h1 className="underline text-2xl mb-5">Annuaire de docteurs</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.length > 0 ? doctors.map((doctor) => (
            <a href={`/doctor/${doctor.id}`} className="flex flex-col justify-center items-center gap-3 border p-4 rounded-md bg-zinc-100" key={doctor.id}>
                <img className="w-20 " src={doctor.image} alt="{doctor.firstname} {doctor.lastname}}" />
                    <h2>{doctor.firstname} {doctor.lastname} - {doctor.speciality}</h2>
                <div>
                    <p>{doctor.address}, {doctor.zip} {doctor.city}</p>
                    <p>{doctor.phone}</p>
                </div>
            </a>
        )) : <p>Aucun docteur n&apos;est disponible pour le moment</p>}
        </section>
    </main> );
}

export default Home;