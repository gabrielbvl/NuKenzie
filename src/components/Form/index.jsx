import "./styles.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions }) {
    const [description, setDescription] = useState("");
    const [type, setType] = useState("Entrada");
    const [value, setValue] = useState();

    const addFinance = () => {
        const newTransactions = { description, type, value };
        setListTransactions([...listTransactions, newTransactions]);
    };

    return (
        <div className="Form">
            <div className="Description">
                <p className="Titulo">Descrição</p>

                <input
                    onChange={(e) => setDescription(e.target.value)}
                    className="Input-Description"
                    type="text"
                    placeholder="Digite aqui sua descrição"
                />

                <p className="Ex">Ex: Compra de roupas</p>
            </div>

            <div className="Valor">
                <div className="AddValue">
                    <p className="Titulo">Valor</p>

                    <input
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="Input-Value"
                        type="number"
                        placeholder="1                           R$"
                    />
                </div>

                <div className="ValueType">
                    <p className="Titulo">Tipo de valor</p>

                    <select
                        className="Select"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="Entrada" selected>
                            Entrada
                        </option>
                        <option value="Saida">Saida</option>
                    </select>
                </div>
            </div>

            <button className="Btn-AddValue" onClick={() => addFinance()}>
                {" "}
                Inserir Valor{" "}
            </button>
        </div>
    );
}

export default Form;
