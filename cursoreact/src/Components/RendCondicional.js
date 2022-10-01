const RendCondicional = ({x, y}) => {

    return (
        <>
            <hr></hr>
            <h4>Valor de X: {x}</h4>
            {x > 5 && <p>X é maior do que 5</p>}
            {x > 10 ? <p>X é maior do que 10</p> : <p>X é menor do que 10</p>}
            <p>O valor de Y: {y}</p>
        </>
    );
}

export default RendCondicional;