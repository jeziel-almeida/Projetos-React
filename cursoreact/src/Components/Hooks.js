import {useState} from 'react';

const Hooks = () => {

    let [idade, setNovaIdade] = useState(22);

    const changeAge = () => {
        setNovaIdade(24);
    }

    return (
        <div>
            <hr></hr>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar a idade</button>
        </div>
    );

}

export default Hooks;