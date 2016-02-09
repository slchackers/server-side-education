import { run } from '@cycle/core';
import { makeDOMDriver } from '@cycle/dom';
import main from './text-entry';

run(main, {
    DOM: makeDOMDriver('#root')
});
