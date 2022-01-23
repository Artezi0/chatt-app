import styled from 'styled-components'

export const Navbar = styled.div`

width: 100%;
z-index: 999;
height: 100px;
padding: 0 10%;
color: white;
position: absolute;
background-color: #050505;

/* Global styles */
list-style: none;
user-select: none;
text-decoration: none;
`

export const NavbarItems = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`

export const NavbarLogo = styled.div`
display: flex;

span {
    font-size: 50px;
}

h2 {
    font-size: 20px;
    line-height: 88%;
    padding-top: 19px;
    /* text-transform: uppercase; */
    font-family: 'Be Vietnam Pro', sans-serif;
}
`
export const NavbarIcons = styled.ul`
display: flex;
gap: 20px;

li {
    color: white;
    font-size: 18px;
    list-style: none;

    a {
        color: inherit;
    }

    &:hover {
        transition: .3s;
        color: #6200ff;
    }
}
`

export const LoginSection = styled.section`
width: 100%;
height: 100vh;
color: white;
position: relative;
background-color: #050505;

h2 {
    font-size: 5rem;
    font-weight: 900;
    line-height: 95%;
    padding-top: 2.5em;
    text-align: center;
    font-family: 'PP Neue Montreal', sans-serif;
}

p {
    left: 50%;
    bottom: 5%;
    opacity: 50%;
    position: absolute;
    user-select: none;
    transform: translate(-50%, 0);
    font-family: 'PP Neue Montreal', sans-serif;
}
`

export const LoginContainer = styled.div`
height: 30vh;

.login-button {
    margin: 10px 0;
    cursor: pointer;
    font-size: 1.1rem;
    text-align: center;
    user-select: none;
    font-family: 'Be Vietnam Pro', sans-serif;
} 

.google {
    width: 20%;
    padding: 10px 0;
    border-radius: 100px;
    margin: 50px auto 0 auto;
    background-color: #6200ff;

    &:hover {
        transition: .3s;
        background-color: #4e00ca;
    }
}

.facebook {
    width: 20%;
    margin: 10px auto 0 auto;
    padding: 10px 0;
    border-radius: 100px;
    border: 1px solid white;

    &:hover {
        color: black;
        transition: .3s;
        background-color: white;
    }
}
`
