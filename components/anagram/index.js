import { Button, Snackbar } from 'react-toolbox/lib';
import Input from 'react-toolbox/lib/input';
import React from 'react';
import './index.css';

class Anagram extends React.Component {
  state = {
    firstString: '',
    secondString: '',
    isAnagram: false
  };

  reduceString = (string) => {
    return string.toLowerCase().split('').sort().join('').trim();
  };

  setString = (name, value) => {
    this.setState({[name]: value, isAnagram: false});
    var secondString = name === 'firstString' ? this.state.secondString : this.state.firstString
    this.checkIfAnagram(value, secondString)
  };

  checkIfAnagram = (firstString, secondString) => {
    if (this.reduceString(firstString) === this.reduceString(secondString)) this.setState({isAnagram: true});
  };

  render () {
    const codeString = `function reduceString(string) {
        \n   /\/convert the string into lower case, remove white spaces and sort the string;
        \n   return string.toLowerCase().split('').sort().join('').trim();
      \n}` + `\n
      \nfunction checkIfAnagram(firstString, secondString) {
        \n  /\/return true if both strings are the same after being reduced
        \n  if (this.reduceString(firstString) === this.reduceString(secondString)) {
          \n    return true;
        \n  }
      \n}`;
    return (
      <div className="anagramContainer">
        <div className="anagramStrings">
          <Input type='text' multiline label='First string of characters' maxLength={100} value={this.state.firstString} onChange={this.setString.bind(this, 'firstString')} />
        </div>
        <div className="anagramStrings">
          <Input type='text' multiline label='Second string of characters' maxLength={100} value={this.state.secondString} onChange={this.setString.bind(this, 'secondString')} />
        </div>
        <div className="code">
          <pre>
            {codeString}
          </pre>
        </div>
        <Snackbar
          active={this.state.isAnagram}
          label='The strings are anagrams!'
        />
      </div>
    );
  }
}

export default Anagram;
