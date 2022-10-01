import logo from '../assets/logo.svg';

const Imagens = () => {

    return (
        <div>
            <hr></hr>
            <p>Imagens:</p>
            <img src={logo} className="App-logo" alt="logo" />
            <img src="./logoStatic.svg" className="logo-estatico" />
        </div>
    );
}

export default Imagens;