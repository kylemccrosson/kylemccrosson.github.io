import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

export default () =>
  <Layout>
    <div>
      <Header page={'sound'}/>
      <h1>Physical Modeling Synthesis of Birdcall</h1>
      <iframe width="80%"
              height="300"
              scrolling="no"
              frameBorder="no"
              title='digital_forest'
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/794625619%3Fsecret_token%3Ds-67IWn06lWe1&color=%2313172a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
      <p>
        My music technology capstone project was research into the synthesis of birdcall and birdsong. I used the
      information I gathered around the biological mechanisms of bird vocalization to inform the construction
      of a bird sound synthesizer patch in Max/MSP. My pathway started with a single sine oscillator that goes through
      FM, AM, and a low-pass filter. I use a variety of continuous envelopes to create complex expression within the
      bird sounds. I used a library of sounds constructed with this Max patch to create a soundscape composition titled
      'digital_forest'.
      </p>
      <hr/>
      <h1>Invasion</h1>
      <iframe src="https://player.vimeo.com/video/333603991" width="100%" height="360" frameBorder="0"
              allow="fullscreen" title='Invasion' allowFullScreen/>
      <p>
        ‘Invasion’ is a short animated film created by Victoria Barranco, a senior at Northeastern at the time,
        who asked me to design the sound effects for the animation. Barranco created this film as part of her
        capstone project -- it depicts an alligator named Scoot and his butterfly friend who are put in danger by a
        gang of monsters encroaching on their home. The film is meant to raise awareness for the destruction of
        wetlands and marshes to build suburban housing in Florida. All sound in the video, aside from the music, was
        recorded and designed by myself. The film was accepted into 13 film festivals in 6 countries around the world
        including the United States, Italy, and Brazil.
      </p>
      <hr/>
      <h1>Inside the Body</h1>
      <iframe src="https://player.vimeo.com/video/288274191" title='Inside the Body' width="100%" height="480" frameBorder="0"
               allowFullScreen/>
      <p>
        While taking a Sound Design course, I had the opportunity to record, design, and compose the sound effects
        and soundtracks for a series of silent videos. I learned how to give a sound perspective, how to be creative
        while finding materials to record sound effects, and how to use sounds and music to create a cohesive story. I
        worked in a group of three and had about a week to complete the sound design, given 'Inside the Body' with no
        sounds at all. I designed the heartbeat, electrical buzz, the siren, the cave ambience, the sounds of the
        levers, chains, and chair. I also recorded and designed the footsteps and the vocalizations.
      </p>
      <hr/>
      <h1>Otsu</h1>
      <iframe src="https://player.vimeo.com/video/288274998" title='Otsu' width="100%" height="427" frameBorder="0"
               allowFullScreen/>
      <p>
        I worked by myself and had about two weeks to complete the sound design, given a completely silent version of
        'Otsu'. I composed and recorded the music using MIDI software instruments. I also designed all sounds in the
        entirety of the piece (some recorded by myself,and others created from royalty-free sound effects).
      </p>
    </div>
  </Layout>
