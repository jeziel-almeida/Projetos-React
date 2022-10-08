import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", link: 'https://www.linkedin.com/in/jeziel-almeida-352252147/', icon: <FaLinkedinIn /> },
    { name: "github", link: 'https://www.github.com/jeziel-almeida', icon: <FaGithub /> },
    { name: "instagram", link: 'https://www.instagram.com/jezielalmeida_/', icon: <FaInstagram /> },
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a 
                href={network.link} 
                className="social-btn" 
                id={network.name} 
                key={network.name}
            >
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks