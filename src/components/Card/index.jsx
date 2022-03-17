import "./styles.css";
import { FaTrash } from "react-icons/fa";

function Card({ transaction, transactionDelete }) {
    return (
        <div className="General-Card">
            {transaction.type === "Entrada" ? (
                <div className="Card-Entrada">
                    <div className="Des-Typ">
                        <div className="Description">{transaction.description}</div>

                        <div className="Type">{transaction.type}</div>
                    </div>

                    <div className="Value">
                        {Number(transaction.value).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                        <FaTrash className="Trash" onClick={() => transactionDelete(transaction)} />
                    </div>
                </div>
            ) : (
                <div className="Card-Saida">
                    <div className="Des-Typ">
                        <div className="Description">{transaction.description}</div>

                        <div className="Type">{transaction.type}</div>
                    </div>

                    <div className="Value">
                        {Number(transaction.value).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                        <FaTrash className="Trash" onClick={() => transactionDelete(transaction)} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Card;
