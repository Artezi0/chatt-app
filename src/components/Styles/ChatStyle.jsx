import styled from "styled-components";

export const ChatPage = styled.section`

margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
box-sizing: border-box;
`


export const Navbar = styled.div`

width: 100%;
z-index: 999;
height: 80px;
padding: 0 10%;
color: white;
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
    font-size: 40px;
    padding-bottom: 5px;
}

h2 {
    font-size: 20px;
    line-height: 88%;
    padding-top: 10px;
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
    cursor: pointer;
    list-style: none;
    font-family: 'Be Vietnam Pro', sans-serif;

    a {
        color: inherit;
    }

    &:hover {
        transition: .3s;
        color: #6200ff;
    }
}
`

export const ChatEngine = styled.div`

font-family: 'Be Vietnam Pro', sans-serif;
`