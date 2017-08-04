'use strict';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/style.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './home';
import domino from './domino';

angular.module('app', [uirouter, home, domino]).config(routing);