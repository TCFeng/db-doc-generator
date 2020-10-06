import React, { Component, createContext } from 'react';

export const FormContext = createContext();

export default class Form extends Component {
  render() {
    return (
      <div>
        <FormContext.Provider value={{ ...this.props }}>
          {this.props.children}
          {/* {React.Children.map(child => child({ value: 111 }))} */}
        </FormContext.Provider>
      </div>
    );
  }
}
