import React from 'react'

const UserProfile = ({params}) => {
  return (

    <div>
      <h1>My name is {params.id}</h1>
    </div>
  )
}

export default UserProfile;
