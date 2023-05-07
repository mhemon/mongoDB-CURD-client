import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loaderData = useLoaderData()

    const handleSubmitBtn = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const user = {name, email}
        console.log(name, email);

        fetch(`http://localhost:5000/users/${loaderData._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('update successfull!')
            }
        })
    }
    return (
        <div>
            <p>Update information of {loaderData.name}</p>

            <form onSubmit={handleSubmitBtn}>
                <input type="text" name="name" id="" defaultValue={loaderData?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loaderData?.email}/>
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;