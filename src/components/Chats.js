import React, { useRef, useState, useEffect } from 'react'

import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'

import { useAuth } from '../contexts/AuthContext'
import { auth } from '../firebase'

import { GithubOutlined,
         DribbbleOutlined,
         InstagramOutlined } from '@ant-design/icons'

/* Styled Components */
import { Navbar,
         NavbarItems,
         NavbarLogo,
         NavbarIcons,
         ChatPage } from './Styles/ChatStyle' 

export default function Chats() {
    const didMountRef = useRef(false)
    const [ loading, setLoading ] = useState(true)
    const { user } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        await auth.signOut()
        history.push('/')
    }

    async function getFile(url) {
        let response = await fetch(url)
        let data = await response.blob()
        return new File([data], "test.jpg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if (!didMountRef.current) {
           didMountRef.current = true 
           
           if (!user || user === null) {
               history.push('/')
               return
           }
    

        // Get-or-create should be in a firebase function
        axios.get(
            'https://api.chatengine.io/users/me', 
            { headers: {
                "project-id": "0a6cc107-3d8e-470b-8b48-4af5d56aa1ba",
                "user-name": user.email,
                "user-secret": user.uid
            }}
        )

        .then(() => setLoading(false))

        .catch(() => {
            let formdata = new FormData()
            formdata.append('email', user.email)
            formdata.append('username', user.email)
            formdata.append('secret', user.uid)

            getFile(user.photoURL) 
            .then((avatar) => {
                formdata.append('avatar', avatar, avatar.name)
                    
                axios.post(
                    'https://api.chatengine.io/users/',
                    formdata,
                    { headers: { "private-key": "92c74c38-8656-4dc4-94a6-7867a1955378" }}
                )
                .then(() => setLoading(false))
                .catch(e => console.log('e', e.response))
            })
         })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        }
    }, [user, history])

    if(!user || loading) return <div />

    return (
        <ChatPage>

            {/* Navbar Elements */}
            <Navbar>
                <NavbarItems>
                    <NavbarLogo>
                        <span role="img" aria-label="logo">🌌</span>
                        <h2>Chatt. <br /> By Artezio</h2>
                    </NavbarLogo>
                    <NavbarIcons>
                        <li onClick={handleLogout}>Logout</li>
                        <li><a href='https://github.com/Artezi0'><GithubOutlined /></a></li>
                        <li><a href='https://dribbble.com/Artezio'><DribbbleOutlined /></a></li>
                        <li><a href='https://isntagram.com/artezio_'><InstagramOutlined /></a></li>
                    </NavbarIcons>
                </NavbarItems>
            </Navbar>


            {/* ChatEngine */}
            <ChatEngine 
                height="calc(100vh - 80px)"
                projectID="0a6cc107-3d8e-470b-8b48-4af5d56aa1ba"
                userName={user.email}
                userSecret={user.uid}
           />
        </ChatPage>    
    )
}