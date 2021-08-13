class Display extends React.Component {
  render() {
    return (
      <div className="Display">0</div>
    );
  }
}

class Key extends React.Component {
  isOperation() {
    const operations = ['AC', '+/-', '%', '÷', '+', '-', '='];
    return operations.includes(this.props.value);
  }

  render() {
    let className = "Key";
    if(isOperation()) {
      className += " bg-orange";
    } else if(this.props.value === '0') {
      className += " big-zero";
    }

    return (
      <div className={ className }>{ this.props.value }</div>
    );
  }
}

class Keyboard extends React.Component {
  render() {
    let keys = [];
    const values = ['AC', '+/-', '%', '÷',
                  '7', '8', '9', 'x', '4',
                  '5', '6', '-', '1', '2',
                  '3', '+', '0', '.', '='];
    
    values.forEach((value) => {
      keys = keys.concat(
        <Key value={ value } />
      );
    });

    return (
      <div className="Keyboard">
        { keys }
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div className="Calculator">
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;