import React from 'react';
import { Card } from 'semantic-ui-react';

const WritingPostCard = (props) => (
  <Card
    link
    header={ props.title }
    meta={ props.category}
    description={ props.description }
    href={ props.route }
  />
);

export default WritingPostCard;
