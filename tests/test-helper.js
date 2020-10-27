import Application from 'ember-stability-experiment/app';
import config from 'ember-stability-experiment/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
