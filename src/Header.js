import React from 'react'
import {CgProfile} from 'react-icons/cg'
import {BsFillChatFill} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import "./Header.css"

export default function Header() {
  return (
    //BEM
    <div className='header'>
        <div className='header-profile'><CgProfile /></div>
        <div className='header-Logo'><MdWork /></div>
        <div className='header-chat'><BsFillChatFill /></div>
    </div>
  )
}

