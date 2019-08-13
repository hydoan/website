import React from 'react'
import { Container, Image, Grid, Segment } from 'semantic-ui-react'

import NavBar from '../components/NavBar'
import ProfileImage from '../images/profile.jpg'


export default function AboutPage() {
  return (
    <Container>
      <NavBar />
      <Grid>
        <Grid.Column width={5}>
          <Image src={ ProfileImage } rounded />
        </Grid.Column>

        <Grid.Column width={11}>
          <Segment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius, ligula vel aliquam hendrerit, purus mauris convallis arcu, cursus imperdiet sapien urna ac risus. Cras blandit auctor nisl, sit amet lobortis ante posuere vel. Maecenas placerat, nisl non tempus tincidunt, justo massa vehicula risus, vel ultrices nulla erat vel risus. Pellentesque gravida, arcu eu porta pulvinar, urna ipsum malesuada turpis, dignissim posuere quam nibh ac leo. Aenean eget vehicula lacus. Aenean massa elit, commodo id purus id, lacinia fringilla risus. Donec consectetur elementum tellus vitae aliquet. Nam convallis velit non diam dignissim, at volutpat lectus maximus. Sed congue luctus neque nec tristique. Praesent consequat iaculis tellus, lobortis mattis ex lacinia a. Cras id fringilla urna. Curabitur interdum nisl id ante viverra, vitae hendrerit risus consectetur. Quisque fermentum porta purus sed suscipit. Praesent euismod egestas risus vel molestie. Morbi viverra justo velit, at venenatis mi mollis ut.
            <br/>
            <br/>

            Aenean non quam sit amet arcu commodo facilisis. Morbi sed neque nec sem congue vestibulum quis gravida mauris. Nunc nec mi aliquam, laoreet urna non, porta leo. Nulla vitae ante finibus, viverra nunc ut, lacinia diam. Proin at nulla sollicitudin, malesuada dolor sit amet, facilisis massa. Vestibulum sapien ante, consectetur et risus eget, eleifend hendrerit sapien. Donec eu ultricies velit. Phasellus vitae suscipit tortor. Duis vel placerat turpis. Donec lacus velit, euismod at ante eget, facilisis suscipit ante. Etiam maximus magna in placerat porttitor. Etiam convallis tortor dolor, eu laoreet nibh sollicitudin nec.
            <br/>
            <br/>

            Nunc nec quam eu diam scelerisque rhoncus eu a ante. Ut at volutpat velit, eget dictum ligula. Praesent congue aliquet est, ut tincidunt justo commodo sed. Sed quis fermentum tortor, luctus euismod sapien. Donec tempor et odio eget ornare. Nunc facilisis nunc dui, sed congue eros pulvinar eget. Etiam aliquam vitae nisl non commodo. Nam pulvinar arcu non facilisis ultricies. Donec varius ligula orci, vitae tristique justo pharetra vitae.
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
