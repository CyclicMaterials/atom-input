/** @jsx hJSX */

import cuid from 'cuid';
import intent from './intent';
import model from './model';
import view from './view';
import {clone} from 'ramda';
import {hJSX} from '@cycle/dom'; // eslint-disable-line

const COMPONENT_NAME = `page-Demo`;

function demo({DOM}) {
  const id = cuid();
  const actions = intent({DOM, id, componentName: COMPONENT_NAME});
  const state$ = model({actions, componentName: COMPONENT_NAME});
  const vtree$s = [];

  return {
    DOM: view({state$, id}, ...vtree$s),
    id,
    state$: state$.map((state) => clone(state)),
  };
}

export default demo;
