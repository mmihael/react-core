import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

render () {
    return (
            <div>
                {
                    '234R24e312a24c234t421 21241co124r123e'
                        .split('')
                        .filter(e => e.match(/[a-z\ ]/i))
                        .map(e => (<span>{e}</span>))
                }
            </div>
        );
    }

}

render(<App />, document.getElementById('app'));
