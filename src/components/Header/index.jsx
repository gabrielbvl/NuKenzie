import NuKenzie from "./NuKenzie.svg";
import "./styles.css";

function Header({ setNewPage }) {
    return (
        <header className="Topo">
            <img src={NuKenzie} alt="Logo Nu Kenzie" />

            <button className="Inicio" onClick={() => setNewPage(false)}>
                Inicio
            </button>
        </header>
    );
}

export default Header;
