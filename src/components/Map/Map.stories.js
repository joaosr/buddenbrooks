import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MapContainer from './index';

import countryLayers from '../../../public/countries.json'
import germanyLayers from '../../../public/germany.json'
import superPopulatedLayers from '../../../public/super_populated.json'

storiesOf('Map', module).add('default', () => (
  <MapContainer
    layers={countryLayers}
    onFeatureClick={action('Country clicked')}
  />
));

storiesOf('Map', module).add('country level', () => (
  <MapContainer
    layers={germanyLayers}
    onFeatureClick={action('City clicked')}
  />
));

storiesOf('Map', module).add('super populated', () => (
  <MapContainer
    layers={superPopulatedLayers}
    onFeatureClick={action('City clicked')}
  />
));
