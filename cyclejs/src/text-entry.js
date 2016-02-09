import Rx from 'rx';
import Cycle from '@cycle/core';
import {div, textarea, p, makeDOMDriver} from '@cycle/dom';

export default function main(sources) {
    const sinks = {
        DOM: sources.DOM.select('textarea').events('keyup')
        .map(ev => ev.target.value)
        .startWith('')
        .map(value => {
            let remainingChars = 4000 - value.length;
            return div([
                textarea(), 'Type something',
                p(`${remainingChars} characters remaining`)
            ])
        })
    };

    return sinks;
}
