import React, { useEffect, useState } from 'react'

function UserScreen() {
  const [name, setName]=useState("")
  const [firstName, setFirstName]=useState(name)
  const [mail,setMail]=useState("")
  const [myMail, setMyMail]=useState(mail)
 

  const validation = () =>{
    setFirstName(name)
    setMyMail(mail)
  }


  return (
    <main id="userScreenMain">
      <section id="userScreenSectionLeft">
        <div>Nom: {firstName}</div>
        <div>e-mail: {myMail}</div>
      </section>
      <section id="userScreenSectionRight">
      <div>Your adress: 
        <input onChange={element=>setName(element.target.value)}
          value={name}
        />
        

      </div>
        <div>Your e-mail: 
        <input onChange={element=>setMail(element.target.value)}
          value={mail}
        />
        </div>
<button onClick={()=>validation()}>ok</button>
      </section>
      

    </main>
  )
}

export default UserScreen