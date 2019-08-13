import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

export default class WritingNav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Container>
          <Menu.Item href="#WebsiteIntroduction" name='intro' active={activeItem === 'intro'} onClick={this.handleItemClick}>
            Website Introduction
          </Menu.Item>
          <Menu.Item href="#Post2" name='post2' active={activeItem === 'post2'} onClick={this.handleItemClick}>
            Post 2
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
