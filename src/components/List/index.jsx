import Card from "../Card";
import "./styles.css";
import NoCards from "./NoCard.svg";

function List({ listTransactions, transactionDelete }) {
    return (
        <>
            {listTransactions.length === 0 ? (
                <>
                    <h2 className="NoH2"> Você ainda não possui nenhum lançamento </h2>
                    <img className="NoCard" src={NoCards} alt="Logo Nu Kenzie" />
                </>
            ) : (
                <ul className="Card">
                    {listTransactions.map((transaction, index) => (
                        <Card
                            transactionDelete={transactionDelete}
                            transaction={transaction}
                            key={index}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default List;
