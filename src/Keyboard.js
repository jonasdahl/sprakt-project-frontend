import React, { Component } from 'react';
import './Keyboard.css';
import KeyboardLetter from './KeyboardLetter.js'

class Keyboard extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="keyboard">
        <div className="section-a">
          <div className="key num dual">
            ~<br />`
          </div>

          <div className="key num dual">
            !<br />1
          </div>
          <div className="key num dual">
            @<br />2
          </div>
          <div className="key num dual">
            #<br />3
          </div>
          <div className="key num dual">
            $<br />4
          </div>
          <div className="key num dual">
            %<br />5
          </div>
          <div className="key num dual">
            ^<br />6
          </div>
          <div className="key num dual">
            &<br />7
          </div>
          <div className="key num dual">
            *<br />8
          </div>
          <div className="key num dual">
            (<br />9
          </div>
          <div className="key num dual">
            )<br />0
          </div>
          <div className="key num dual">
            _<br />-
          </div>
          <div className="key num dual">
            +<br />=
          </div>
          <KeyboardLetter text="Backspace" keysDown={this.props.keysDown} code={8} type="backspace" />


          <div className="key tab">
            Tab
          </div>

          <KeyboardLetter letter="Q" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="W" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="E" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="R" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="T" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="Y" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="U" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="I" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="O" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="P" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="Å" keysDown={this.props.keysDown} />
          <div className="key dual">
            {'}'}<br />]
          </div>
          <div className="key letter dual slash">
            |<br />\
          </div>
          <KeyboardLetter text="Caps Lock" keysDown={this.props.keysDown} code={20} type="caps" />
          <KeyboardLetter letter="A" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="S" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="D" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="F" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="G" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="H" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="J" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="K" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="L" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="Ö" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="Ä" keysDown={this.props.keysDown} />
          <div className="key dual">
            "<br />'
          </div>
          <KeyboardLetter text="Enter" keysDown={this.props.keysDown} code={13} type="enter" />
          <KeyboardLetter text="Shift" keysDown={this.props.keysDown} code={16} type="shift left" />
          <KeyboardLetter text="<" keysDown={this.props.keysDown} code={188} type="" />
          <KeyboardLetter letter="Z" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="X" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="C" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="V" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="B" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="N" keysDown={this.props.keysDown} />
          <KeyboardLetter letter="M" keysDown={this.props.keysDown} />
          <div className="key dual">
            &lt; <br />,
          </div>
          <div className="key dual">
            &gt; <br />.
          </div>
          <div className="key dual">
            ?<br />/
          </div>
          <KeyboardLetter text="Shift" keysDown={this.props.keysDown} code={16} type="shift right" />
          <KeyboardLetter text="Fn" keysDown={this.props.keysDown} code={-1} type="" />
          <KeyboardLetter text="Control" keysDown={this.props.keysDown} code={17} type="" />
          <KeyboardLetter text="Option" keysDown={this.props.keysDown} code={18} type="" />
          <KeyboardLetter text="Command" keysDown={this.props.keysDown} code={91} type="ctrl" />
          <KeyboardLetter text="" keysDown={this.props.keysDown} code={32} type="space" />
          <KeyboardLetter text="Command" keysDown={this.props.keysDown} code={93} type="ctrl" />
          <KeyboardLetter text="Alt" keysDown={this.props.keysDown} code={18} type="" />
          <div className="key"></div>
          <div className="key"></div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Keyboard;
