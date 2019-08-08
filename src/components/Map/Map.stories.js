import React from 'react';

import { storiesOf } from '@storybook/react';

import MapContainer from './index';

import countryLayers from '../../../public/countries.json'
import germanyLayers from '../../../public/germany.json'
import superPopulatedLayers from '../../../public/super_populated.json'

storiesOf('Map', module).add('default', () => <MapContainer layers={countryLayers} />);

storiesOf('Map', module).add('country level', () => <MapContainer layers={germanyLayers} />);

storiesOf('Map', module).add('super populated', () => <MapContainer layers={superPopulatedLayers} />);
