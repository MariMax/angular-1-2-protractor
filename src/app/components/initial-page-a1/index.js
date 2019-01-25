import angular from 'angular';
import { appDowngrade } from '../../app.downgrade';

const deps = [appDowngrade];

export const initialPage = angular.module('Hybrid.main', deps)
  .component('mainApp', {
    template: `
      <app-component></app-component>
      <span class="a1-span">hello from a1</span>
    `
  }).name;