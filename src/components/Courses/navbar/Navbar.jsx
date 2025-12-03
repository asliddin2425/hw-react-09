import './Navbar.css'
import NavbarIcon1 from './assets/home.svg'
import NavbarIcon2 from './assets/icon.svg'
export function Navbar() { 
    return (
        <>
            <div className="navbar">
                <div id="navigation">
                    <img src={NavbarIcon1} alt="home" />
                    <p>Asosiy</p>
                    <img src={NavbarIcon2} alt="icon" />
                    <h6>Kutubxona</h6>
                </div>
            </div>
        </>
    )
}



