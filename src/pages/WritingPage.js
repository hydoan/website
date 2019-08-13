import React from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react'

import NavBar from '../components/NavBar'
import WritingNav from '../components/WritingNav'
import Post00 from '../writingposts/Post00'
import Post01 from '../writingposts/Post01'


export default function WritingPage() {
  return (
    <Container>
      <NavBar />
      <Grid >
        <Grid.Column width={3}>
          <WritingNav />
        </Grid.Column>
        <Grid.Column width={13}>
          <Segment>
            <Post00 />
          </Segment>
          <Segment>
            <Post01 />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
