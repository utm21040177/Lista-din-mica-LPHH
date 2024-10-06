import React, { useState } from "react";

function Card() {
  const [inputs, setInputs] = useState([]);
  const [total, setTotal] = useState(0);


  const agregarInput = () => {
    setInputs([...inputs, { id: inputs.length, valor: 0 }]);
  };

  const manejarCambio = (e, id) => {
    const nuevoValor = parseFloat(e.target.value) || 0;

    const nuevosInputs = inputs.map((input) =>
      input.id === id ? { ...input, valor: nuevoValor } : input
    );

    setInputs(nuevosInputs);

    const nuevoTotal = nuevosInputs.reduce((acc, input) => acc + input.valor, 0);
    setTotal(nuevoTotal);
  };
  const resetearInputs = () => {
    setInputs([]);
    setTotal(0);
  };

  return (
    <div style={styles.card}>
      <h1>Lista dinámica</h1>
      <h2>Cifra total: {total}</h2>
      <ul style={styles.lista}>
        {inputs.map((input, index) => (
          <li key={input.id}>
            <label>{`Cifra ${index + 1}:`}</label>
            <input
              type="number"
              value={input.valor}
              onChange={(e) => manejarCambio(e, input.id)}
              style={styles.input}
            />
          </li>
        ))}
      </ul>
      <button onClick={agregarInput} style={styles.button}>
        Add
      </button>
      <button onClick={resetearInputs} style={styles.button}>
        Rest
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "8px",
    width: "950px",
    margin: "20px auto",
    textAlign: "center",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    width: "600px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#ad83bc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  },
  lista: {
    listStyleType: "none",
    padding: 0,
    textAlign: "left",
  },
};

export default Card;



