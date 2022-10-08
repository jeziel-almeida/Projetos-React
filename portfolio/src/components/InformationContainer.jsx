import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const contatos = [
  {tipo: "Telefone", endereco: "(61) 9605-0286", icon: <AiFillPhone id="phone-icon" />},
  {tipo: "E-mail", endereco: "jezielalmeida16@gmail.com", icon: <AiOutlineMail id="email-icon" />},
  {tipo: "Localização", endereco: "Brasília / DF", icon: <AiFillEnvironment id="pin-icon" />}
]

const InformationContainer = () => {
  return (
    <section id="information">

      {contatos.map((contato) => (
        <div className='info-card'>
          {contato.icon}
          <div>
            <h3>{contato.tipo}</h3>
            <p>{contato.endereco}</p>
          </div>
        </div>
      ))}

    </section>
  )
}

export default InformationContainer