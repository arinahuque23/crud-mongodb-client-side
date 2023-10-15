import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();


    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = {name, email};

        fetch(`http://localhost:3000/users/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated succecfully');
            }
        })

    }



    return (
        <div>
            <h2>
                Update informaion of { loadedUser.name }
            </h2>

            <form  onSubmit={handleUpdate}   className="border  p-10 w-[500px]" >
                    <input className="border mt-2 text-center" type="text" name="name" defaultValue={loadedUser?.name}  id="" /><br />
                    <input className="border mt-2 text-center" type="email" name="email" id="" defaultValue={loadedUser?.email}/><br />
                    <input className="border mt-3 p-2 rounded-md bg-blue-300"  type="submit" value="Update" /> <br />
            </form>
            
        </div>
    );
};

export default Update;