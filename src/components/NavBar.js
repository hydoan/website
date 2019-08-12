import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text>
        <Container>
          <Menu.Item header>
            hydoan
          </Menu.Item>
          <Menu.Item as={Link} to="/" name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
            About
          </Menu.Item>

          <Menu.Item as={Link} to="/work" name='work' active={activeItem === 'work'} onClick={this.handleItemClick}>
            Work
          </Menu.Item>

          <Menu.Item as={Link} to="/writing" name='writing' active={activeItem === 'writing'} onClick={this.handleItemClick}>
            Writing
          </Menu.Item>

          {/* Add music back into page after*/}
          {/*<Menu.Item as={Link} to="/music" name='music' active={activeItem === 'music'} onClick={this.handleItemClick}>
            Music
          </Menu.Item>*/}
        </Container>
      </Menu>
    )
  }
}
