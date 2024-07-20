import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react'

const UserInfo = ({user}) => {
  return (
    <div>
        {user &&  user.email}
    </div>
  )
}

export default UserInfo