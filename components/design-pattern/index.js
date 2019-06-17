import React from 'react';

class DesignPattern extends React.Component {
  render () {
    const codeStringOne = `interface Vehicle {
          \n  int set_num_of_wheels()
          \n  int set_num_of_passengers()
          \n  boolean has_gas()
        \n}
        \nThis pattern is commonly referred to as the \`Interface Design Pattern\` and is used to define the communication between different pieces of software.
        \nThe main idea being the de-coupling of functions from implementations.`;
    const codeStringTwo = `We can use this interface to create car and plane classes quite simply:
        \n  Define respective classes that implement the interface
        \n  Define class attributes that the interface needs for implementation`;
    const codeStringThree = `(Implementation in Java for Car class)
        \n  public class Car implements Vehicle {
        \n    int wheels;
        \n    int passengers;
        \n    int gas;
        \n 
        \n    /\/New instances must be provided with an initial gas amount
        \n    public Car (int gas) {
        \n      gas = gas;
        \n    }
        \n
        \n    public int set_num_of_wheels(int wheels) {
        \n      wheels = wheels;
        \n      return wheels;
        \n    }
        \n
        \n    public int set_num_of_passengers(int passengers) {
        \n      passengers = passengers;
        \n      return passengers;
        \n    }
        \n
        \n    public boolean has_gas() {
        \n      if (gas > 0) {
        \n        return true;
        \n      } else {
        \n        retuen false;
        \n      }
        \n    }
        \n  }
        \n  /\/Instantiate a new car with initial gas of 20
        \n  Car car = new Car(20);`;
        const codeStringFour = `(Implementation in Java for Plane class)
        \n  public class Plane implements Vehicle {
        \n    int wheels;
        \n    int passengers;
        \n    int gas;
        \n 
        \n    /\/New instances must be provided with an initial gas amount
        \n    public Plane (int gas) {
        \n      gas = gas;
        \n    }
        \n
        \n    public int set_num_of_wheels(int wheels) {
        \n      wheels = wheels;
        \n      return wheels;
        \n    }
        \n
        \n    public int set_num_of_passengers(int passengers) {
        \n      passengers = passengers;
        \n      return passengers;
        \n    }
        \n
        \n    public boolean has_gas() {
        \n      if (gas > 0) {
        \n        return true;
        \n      } else {
        \n        retuen false;
        \n      }
        \n    }
        \n  }
        \n  /\/Instantiate a new plane with initial gas of 200
        \n  Plane plane = new Plane(200);`;
    const codeStringFive = `We can use the inheritence design pattern to achieve a synonymous outcome:
        \n  Define a parent class to be extended by child classes
        \n  Define base attributes that all children will inherit`;
    const codeStringSix = `(Implementation in Java for parent class)
        \n  public class Vehicle {
        \n    int wheels;
        \n    int passengers;
        \n    int gas;
        \n 
        \n    /\/New instances must be provided with an initial gas amount
        \n    public Vehicle (int gas) {
        \n      gas = gas;
        \n    }
        \n
        \n    public int set_num_of_wheels(int wheels) {
        \n      wheels = wheels;
        \n      return wheels;
        \n    }
        \n
        \n    public int set_num_of_passengers(int passengers) {
        \n      passengers = passengers;
        \n      return passengers;
        \n    }
        \n
        \n    public boolean has_gas() {
        \n      if (gas > 0) {
        \n        return true;
        \n      } else {
        \n        retuen false;
        \n      }
        \n    }
        \n  }`;
    const codeStringSeven = `(Implementation in Java for child class)
        \n  public class Plane extends Vehicle {
        \n 
        \n    /\/New instances must be provided with an initial gas amount
        \n    public Plane (int gas) {
        \n      super(gas);
        \n    }
        \n
        \n  }
        \n  /\/Instantiate a new plane with initial gas of 200
        \n  Plane plane = new Plane(200);`;
    return (
      <div className="designPatternContainer">
        <div className="code">
          <pre>
            {codeStringOne}
          </pre>
        </div>
        <div className="code">
          <pre>
            {codeStringTwo}
          </pre>
        </div>
        <div className="code">
          <pre>
            {codeStringThree}
          </pre>
        </div>
        <div className="code">
          <pre>
            {codeStringFour}
          </pre>
        </div>
        <div className="code">
          <pre>
            {codeStringFive}
          </pre>
        </div>
        <div className="code">
          <pre>
            {codeStringSix}
          </pre>
        </div>
        <div className="code">
          <pre>
            {codeStringSeven}
          </pre>
        </div>
      </div>
    );
  }
}

export default DesignPattern;
