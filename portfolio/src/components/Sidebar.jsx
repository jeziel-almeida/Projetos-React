import SocialNetworks from './SocialNetworks'

import '../styles/components/sidebar.sass'
import Avatar from '../img/perfil.jpg'
import InformationContainer from './InformationContainer'


const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Imagem de perfil" />
            <p className="title">Desenvolvedor</p>

            <SocialNetworks />
            
            <InformationContainer />
            
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}

export default Sidebar