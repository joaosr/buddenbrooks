import React from 'react';

import { storiesOf } from '@storybook/react';

import PlaceCard from './index';

import morley from './morley.csv'

storiesOf('PlaceCard', module).add('default', () => <div><PlaceCard data={morley} /></div>);
