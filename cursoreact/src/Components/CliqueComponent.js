const CliqueComponent = () => {

    const handleClick = () => {
        alert("Clicou!");
    }

    return (
        <div>
            <p>Segundo componente</p>
            <button onClick={handleClick}>Clique Aqui</button>
        </div>
    );
}

export default CliqueComponent;