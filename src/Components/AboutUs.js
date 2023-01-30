import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileClass from './ProfileClass';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log('Parent constructor');
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Parent-interval');
    }, 1000);
    console.log('Parent componentDidMount');
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Parent componentWillUnmount');
  }

  render() {
    console.log('Parent render');
    return (
      <div>
        <h2>About Us</h2>
        <Outlet />
        <ProfileClass name='Adam' number={1} />
        <ProfileClass name='Eve' number={2} />
      </div>
    );
  }
}

export default AboutUs;
