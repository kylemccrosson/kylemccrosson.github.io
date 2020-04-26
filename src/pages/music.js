import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import LeftFloatText from '../components/leftFloatText'
import RightFloatContent from '../components/rightFloatContent'

export default () =>
  <Layout>
    <div>
      <Header page={'music'}/>
      <RightFloatContent>
        <iframe src="https://open.spotify.com/embed/playlist/3CsXO21tlkEoX2RAkJnfqC" width="300" height="380"
                frameBorder="0" allow="encrypted-media" title='All Kale'/>
      </RightFloatContent>

      <LeftFloatText>
        <p>
          Music started as a childhood hobby for me -- piano lessons when I was 6 years old -- which has blossomed into
          a lifelong pursuit. Studying music composition and technology at Northeastern University gave me the opportunity
          to explore many sides and genres of music composition, but I have learned that the things I am most passionate
          about are songwriting and production, especially electronic music. A large portion of my time at school has
          been spent learning about programming my own synthesizers and designing my own sounds. Recently, I have been
          taking a lot of inspiration from '80s synth-pop.
        </p>
        <p>
          I wrote, recorded, and produced my first EP (<i>Look At Me</i>) and
          released it in 2018 under the name "Kale". I recorded the vocals in the basement of my childhood home and
          produced all the tracks in ProTools. The instrumentals were created using a piano, a microKorg, and a variety
          of software synthesizers. Following that first EP, I took some time to focus on polishing my songwriting,
          production, and recording skills both on my own, and while working an internship at a recording studio in
          Cambridge, MA. Since then, I've released 3 other singles and a second EP with a lot more on the way! I am
          constantly writing new music and collaborating with friends and local artists.
        </p>
        <p>
          All my released music is available for streaming on
          <a href={'https://open.spotify.com/artist/2z6VdvsPkCV5viCdOfDZGq?si=EQuSrDnaQGC3nRN4TFJwuQ'}>Spotify</a>
          and
          <a href={'https://music.apple.com/us/artist/kale/258819'}>Apple Music</a>, and can be purchased on most
          websites that sell music! My most recent single "Smart Car" can be found
          <a href={'https://ampl.ink/NjAyB'}>here</a>.
        </p>
      </LeftFloatText>
      <RightFloatContent>
        <img alt={'Smart Car artwork'} src={require('../images/smart_car.jpeg')}/>
      </RightFloatContent>
    </div>
  </Layout>
