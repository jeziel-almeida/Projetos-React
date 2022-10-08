import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5 />, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {id: "css", name: "CSS3", icon: <DiCss3 />, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {id: "js", name: "Javascript", icon: <DiJsBadge />, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {id: "node", name: "Node.js", icon: <DiNodejsSmall />, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {id: "mysql", name: "MySQL", icon: <DiMysql />, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
  {id: "react", name: "React", icon: <DiReact />, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer