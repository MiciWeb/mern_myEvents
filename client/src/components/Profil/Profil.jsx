import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import "./Profil.css"

const Profil = () => {
    const [updateForm, setUpdateForm] = useState(false);
    const [bio, setBio] = useState("")
    const [profil, setProfil] = useState([])
    const id = Cookies.get().id;

    var requestGetOptions = {
        method: 'GET',
    };
    var requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bio: bio })
    };

    useEffect(() => {
        fetch(`/api/user/${id}`, requestGetOptions)
            .then((res) => res.json())
            .then((res) => setProfil(res))
    }, [])

    const handleBioUpdate = () => {
        fetch(`/api/user/${id}`, requestOptions)
            .then((res) => res.json())

        setUpdateForm(false);
    }

    return (
        <div className="profil">
            <div className="profil-container">
                {(id == "null" || id === undefined) ? (
                    "vous n'etes pas connecté"
                ) : (
                        <div>
                            <p className="username">Profil de <span style={{ color: "#2eaf51" }}>{profil.username}</span></p>
                            <div className="profil-image">
                                <img src={profil.avatar} alt="" />
                            </div>
                            <div className="bio">
                                <p>Bio</p>
                                {updateForm == false && (
                                    <>
                                        <p onClick={() => setUpdateForm(!updateForm)}>{profil.bio}</p>
                                        <button onClick={setUpdateForm(!updateForm)}>Modifier bio</button>
                                    </>
                                )}
                                {updateForm && (
                                    <textarea
                                        type="text"
                                        defaultValue={profil.bio}
                                        onChange={(e) => setBio(e.target.value)}
                                    ></textarea>
                                )}

                                <button className="profil-btn" onClick={handleBioUpdate}>Valider modifications</button>
                            </div>
                        </div>
                    )}
            </div>
        </div >
    )
}

export default Profil
