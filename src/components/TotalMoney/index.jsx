import "./styles.css";

function TotalMoney({ listTransactions, listNewTransactions }) {
    let totalMoney = 0;

    if (listNewTransactions.length > 0) {
        totalMoney = listNewTransactions.reduce((previousValue, currentValue) => {
            return (previousValue +=
                currentValue.type === "Entrada" ? currentValue.value : -currentValue.value);
        }, 0);
    } else {
        totalMoney = listTransactions.reduce((previousValue, currentValue) => {
            return (previousValue +=
                currentValue.type === "Entrada" ? currentValue.value : -currentValue.value);
        }, 0);
    }

    return (
        <div className="TotalMoney">
            <p className="P-TotalMoney">Valor Total: </p>
            <span>
                {totalMoney.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}{" "}
            </span>
        </div>
    );
}

export default TotalMoney;
