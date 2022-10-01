import CliqueComponent from "./CliqueComponent";


const nome = "Jeziel";

function FirstComponent() {
    return (
        <div>
            {/* Comment */}
            <p>Primeiro Componente</p>
            {nome}
            <CliqueComponent />
        </div>
    );
}

export default FirstComponent;