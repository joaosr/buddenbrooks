import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import PlaceCard from './index';

import places from '../../../public/place.json'

const stories = storiesOf('PlaceCard', module);

stories.addDecorator(withKnobs);

const label = 'Usage type';
const options = ['Office','Residential','Retail', ''];
const defaultValue = '';
const groupId = 'GROUP-ID1';

stories.add('default', () => {
  const select1 = select(label, options, defaultValue, groupId);
  return (<PlaceCard data={places} usageType={select1}/>);
});
