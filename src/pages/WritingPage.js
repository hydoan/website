import React from 'react';
import { Container, Card } from 'semantic-ui-react'

import NavBar from '../components/NavBar'
import WritingPostCard from '../components/WritingPostCard'


export default function WritingPage() {
  return (
    <Container>
      <NavBar />
      <Card.Group itemsPerRow={4}>
        <WritingPostCard route="writing/post00" title="Website Introduction" category="Category" description="Introduction to my personal website"/>

      </Card.Group>
    </Container>
  )
}
