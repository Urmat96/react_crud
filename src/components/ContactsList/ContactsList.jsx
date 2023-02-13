import React from 'react'

const ContactsList = (props) => {


  return (
    <div>
        {props.contacts.map((item, index) => (
            <ul key={item.id}>
                <li>{item.name}</li>
                <li>{item.surname}</li>
                <li>{item.phone}</li>
                <li>
                    <button id='del' onClick={() => props.handleDeleteContact(item.id)}>Delete</button>
                    <button id='ed' onClick={() => props.handleEditIndex(index)}>Edit</button>
                </li>
            </ul>
        ))}
    </div>
  )
}

export default ContactsList