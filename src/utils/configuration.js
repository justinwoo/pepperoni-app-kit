/* @flow */
import {Map} from 'immutable';

let configuration = Map();

export function setConfiguration(name: string, value: mixed) {
  configuration = configuration.set(name, value);
}

export function setAll(properties: Object) {
  configuration = configuration.merge(properties);
}

export function unsetConfiguration(name: string) {
  configuration = configuration.delete(name);
}

export function getConfiguration(key: string) {
  if (!configuration.has(key)) {
    throw new Error('Undefined configuration key: ' + key);
  }

  return configuration.get(key);
}
