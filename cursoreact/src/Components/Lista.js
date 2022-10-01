const Lista = () => {

    const items = [{
        id: 1,
        nome: "João"
    }, {
        id: 2,
        nome: "Luíza"
    }, {
        id: 3,
        nome: "Felipe"
    }];

    

    return (
        <div>
            <hr></hr>
            <h4>Lista de Alunos:</h4>
            {items.map((item) => (
                <p key={item.id}>
                    {item.id} - {item.nome}
                </p>
            ))}
        </div>
    );
}

export default Lista;