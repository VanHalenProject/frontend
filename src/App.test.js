import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('dumb test', () => {
  // The string:
  var str = "Hello world!";

  // Look for "Hello"
  var patt = /Hello/g;
  var result = patt.test(str);

  // Look for "W3Schools"
  var patt2 = /W3Schools/g;
  var result2 = patt2.test(str);
});
