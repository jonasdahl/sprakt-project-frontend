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
          <KeyboardLetter text="Backspace" {...this.props} code={8} type="backspace" />


          <KeyboardLetter text="Tab" {...this.props} code={9} type="tab" />

          <KeyboardLetter letter="Q" {...this.props} />
          <KeyboardLetter letter="W" {...this.props} />
          <KeyboardLetter letter="E" {...this.props} />
          <KeyboardLetter letter="R" {...this.props} />
          <KeyboardLetter letter="T" {...this.props} />
          <KeyboardLetter letter="Y" {...this.props} />
          <KeyboardLetter letter="U" {...this.props} />
          <KeyboardLetter letter="I" {...this.props} />
          <KeyboardLetter letter="O" {...this.props} />
          <KeyboardLetter letter="P" {...this.props} />
          <KeyboardLetter letter="Å" {...this.props} />
          <div className="key dual">
            {'}'}<br />]
          </div>
          <div className="key letter dual slash">
            |<br />\
          </div>
          <KeyboardLetter text="Caps Lock" {...this.props} code={20} type="caps" />
          <KeyboardLetter letter="A" {...this.props} />
          <KeyboardLetter letter="S" {...this.props} />
          <KeyboardLetter letter="D" {...this.props} />
          <KeyboardLetter letter="F" {...this.props} />
          <KeyboardLetter letter="G" {...this.props} />
          <KeyboardLetter letter="H" {...this.props} />
          <KeyboardLetter letter="J" {...this.props} />
          <KeyboardLetter letter="K" {...this.props} />
          <KeyboardLetter letter="L" {...this.props} />
          <KeyboardLetter letter="Ö" {...this.props} />
          <KeyboardLetter letter="Ä" {...this.props} />
          <div className="key dual">
            "<br />'
          </div>
          <KeyboardLetter text="Enter" {...this.props} code={13} type="enter" />
          <KeyboardLetter text="Shift" {...this.props} code={16} type="shift left" />
          <KeyboardLetter text="<" {...this.props} code={188} type="" />
          <KeyboardLetter letter="Z" {...this.props} />
          <KeyboardLetter letter="X" {...this.props} />
          <KeyboardLetter letter="C" {...this.props} />
          <KeyboardLetter letter="V" {...this.props} />
          <KeyboardLetter letter="B" {...this.props} />
          <KeyboardLetter letter="N" {...this.props} />
          <KeyboardLetter letter="M" {...this.props} />
          <div className="key dual">
            &lt; <br />,
          </div>
          <div className="key dual">
            &gt; <br />.
          </div>
          <div className="key dual">
            ?<br />/
          </div>
          <KeyboardLetter text="Shift" {...this.props} code={16} type="shift right" />
          <KeyboardLetter text="Fn" {...this.props} code={-1} type="" />
          <KeyboardLetter text="Control" {...this.props} code={17} type="control" />
          <KeyboardLetter text="Option" {...this.props} code={18} type="option" />
          <KeyboardLetter text="Command" {...this.props} code={91} type="ctrl" />
          <KeyboardLetter letter=" " text="" {...this.props} code={32} type="space" />
          <KeyboardLetter text="Command" {...this.props} code={93} type="ctrl right" />
          <KeyboardLetter text="Alt" {...this.props} code={18} type="alt right" />
          <div className="key last"></div>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default Keyboard;
