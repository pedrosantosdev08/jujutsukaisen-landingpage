import "./Header.css"
export function Header(){
    return(
        <header className="header-container">
            <h1 className="header-title">呪術廻戦</h1>
            <nav>
                <ul className="nav-links">
                    <li><a className="nav-item" href="#wizards">PERSONAGENS</a></li>
                    <li><a className="nav-item" href="#techniques">TÉCNICAS</a></li>
                    <li><a className="nav-item" href="#history">HISTÓRIA</a></li>
                    <li><a className="nav-item" href="#gallery">GALERIA</a></li>
                </ul>
            </nav>
        </header>
    )
}