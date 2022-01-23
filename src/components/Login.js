/* Import Dependencies */
import React from 'react'
import { GoogleOutlined, 
         FacebookOutlined,
         GithubOutlined,
         DribbbleOutlined,
         InstagramOutlined } from '@ant-design/icons'

import "firebase/app"
import { auth } from "../firebase"
import firebase from 'firebase/app'

/* Styled Components */
import { Navbar,
         NavbarItems,
         NavbarLogo,
         NavbarIcons,
        
         LoginSection,
         LoginContainer} from './Styles/LoginStyle' 

/* Page Structure */ 
const Login = () => {
    return (
    <body>

        {/* Navbar Elements */}
        <Navbar>
            <NavbarItems>
                <NavbarLogo>
                    <span role="img" aria-label="logo">🌌</span>
                    <h2>Chatt. <br /> By Artezio</h2>
                </NavbarLogo>
                <NavbarIcons>
                    <li><a href='https://github.com/Artezi0'><GithubOutlined /></a></li>
                    <li><a href='https://dribbble.com/Artezio'><DribbbleOutlined /></a></li>
                    <li><a href='https://isntagram.com/artezio_'><InstagramOutlined /></a></li>
                </NavbarIcons>
            </NavbarItems>
        </Navbar>

        {/* Login Elements */}
        <LoginSection>
            <h2>Log In or Sign In <br /> 
                To Get Started!</h2>

            <p>2022 Prototype</p>
            <LoginContainer>
                <div className='login-button google'
                     onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined /> Sign in with Google
                </div>
                <div className='login-button facebook'
                     onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookOutlined /> Sign in with Facebook
                </div>
            </LoginContainer>
        </LoginSection>

    </body>
    )
}

export default Login