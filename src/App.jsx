import './App.css'

function App() {

  const handleSubmitBtn = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const name = form.name.value
    const user = {
      name, email
    }

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      form.reset()
    })
  }

  return (
    <>
      <h1>Simple CURD operations</h1>

      <form onSubmit={handleSubmitBtn}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Send" />
      </form>
      
    </>
  )
}

export default App
