import React from "react"
import Header from '../components/header'
import Layout from '../components/layout'

export default () =>
  <Layout>
    <div>
      <Header page={'about'}/>
      <p>
        My name is Kyle McCrosson. I grew up in Bayport, NY and graduated with a Bachelor's degree in computer science
        and music composition/technology from Northeastern University
        in May 2020. From this dual major, I have developed a unique creative and
        problem-solving perspective that I can bring to both sides of my discipline. My educational and professional
        career thus far has spanned from developing web applications at MIT Lincoln Lab, to building software to map out
        the human vocal tract, to leading the sound design for student play productions and animations. In my free time
        you can find me writing, producing, and recording music for myself and my friends.
      </p>
    </div>
  </Layout>

