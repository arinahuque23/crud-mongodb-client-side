import './App.css'

function App() {
  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email};
    console.log(user);

    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'

      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('Users Added Successfully')
        form.reset();
      }
    })
  }
  

  return (
    <>
      
      <h1 className='pb-4 text-blue-600'>Simple_Crud</h1>
      
      <div className='gap-3 mb-3'>
        <form onSubmit={handleAddUser} className='border border-black  pt-4'>

          <input className='border' type="text" name='name' id='' placeholder='name' /><br /> <br />
          <input className='border ' type="email" name='email' id='' placeholder='email' /><br /><br />
          <input className='border mt-2 p-2 rounded-md bg-blue-300  font-bold' type="submit" value="Add User" /><br /> <br />
        </form>

      </div>
      
    </>
  )
}

export default App
