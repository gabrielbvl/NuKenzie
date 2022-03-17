import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";

function App() {
    const [listTransactions, setListTransactions] = useState([]);
    const [listNewTransactions, setNewListTransactions] = useState([]);
    const [page, setNewPage] = useState(false);

    const filterEnters = () => {
        const entradas = listTransactions.filter((transaction) => {
            return transaction.type === "Entrada";
        });
        setNewListTransactions(entradas);
    };

    const filterExits = () => {
        const saidas = listTransactions.filter((transaction) => {
            return transaction.type === "Saida";
        });
        setNewListTransactions(saidas);
    };

    const filterAll = () => {
        setNewListTransactions([]);
    };

    const transactionDelete = (item) => {
        const excluir = listTransactions.filter((element) => {
            return element.description !== item.description;
        });
        setNewListTransactions(excluir);
        setListTransactions(excluir);
    };

    return (
        <div className="App">
            {page === false ? (
                <LandingPage setNewPage={setNewPage} />
            ) : (
                <header className="App-header">
                    <div className="Header">
                        <Header setNewPage={setNewPage} />
                    </div>
                    <div className="General">
                        <div className="First-Colum">
                            {
                                <Form
                                    listTransactions={listTransactions}
                                    setListTransactions={setListTransactions}
                                />
                            }

                            {
                                <TotalMoney
                                    listTransactions={listTransactions}
                                    listNewTransactions={listNewTransactions}
                                    setListTransactions={setListTransactions}
                                />
                            }
                        </div>

                        <div className="Colum-2">
                            <div className="Header-Colum-2">
                                <p className="Res-Fin">Resumo financeiro</p>
                                <div className="Btns">
                                    <button id="Btn1" onClick={filterAll}>
                                        Todos
                                    </button>
                                    <button id="Btn2" onClick={filterEnters}>
                                        Entradas
                                    </button>
                                    <button id="Btn3" onClick={filterExits}>
                                        Despesas
                                    </button>
                                </div>
                            </div>

                            <div className="List">
                                {
                                    <List
                                        transactionDelete={transactionDelete}
                                        setListTransactions={setListTransactions}
                                        setNewListTransactions={setNewListTransactions}
                                        listTransactions={
                                            listNewTransactions.length > 0
                                                ? listNewTransactions
                                                : listTransactions
                                        }
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </header>
            )}
        </div>
    );
}

export default App;
