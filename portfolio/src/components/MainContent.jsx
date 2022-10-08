import AboutContainer from './AboutContainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectContainer from './ProjectContainer'

import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">

      <AboutContainer />

      <TechnologiesContainer />

      <ProjectContainer />

    </main>
  )
}

export default MainContent