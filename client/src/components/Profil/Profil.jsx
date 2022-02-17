import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Profil = () => {
    const [handleBio, sethandleBio] = useState(false);

    const id = Cookies.get().id;

    var requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: '{"bio": "fsdf"}'
    };

    useEffect(() => {
        fetch(`/api/user/${id}`, requestOptions)
            .then((res) => res.json())
            .then((res) => console.log(res))
    }, [])

    return (
        <div>

        </div>
    )
}

export default Profil
