import "./styles.css";
import NuKenzie from "./NuKenzie.svg";
import Group277 from "./Group277.svg";

function LandingPage({ setNewPage }) {
    return (
        <div className="General-Landing">
            <div className="Infos">
                <img src={NuKenzie} alt="Logo Nu Kenzie" />
                <h1>Centralize o controle das suas finanças</h1>
                <h6>de forma rápida e segura</h6>
                <button className="Iniciar" onClick={() => setNewPage(true)}>
                    Iniciar
                </button>
            </div>
            <div>
                <img className="Landing-Img" src={Group277} alt="Pagina Inicial" />
            </div>
        </div>
    );
}

export default LandingPage;
