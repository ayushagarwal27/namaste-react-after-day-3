import React from 'react';

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      lastName: 'Jones',
    };
    console.log(this.props.number + ' child constructor');
  }

  async componentDidMount() {
    const getData = async () => {
      const res = await fetch('https://api.github.com/users/ayushCode27');
      const data = await res.json();
      console.log(data);
    };
    getData();
    console.log(this.props.number + ' Child ComponentDidMount');
  }

  componentDidUpdate() {
    console.log(this.props.number + ' Child ComponentDidUpdate');
  }

  render() {
    console.log(this.props.number + ' child render');
    return (
      <div>
        <h1>Profile Class</h1>
        <h2>{this.props.name}</h2>
        <span>{this.state.lastName}</span>
        <h3>{this.state.username}</h3>
        <button onClick={() => this.setState({ username: 'Stein' })}>
          Change username
        </button>
      </div>
    );
  }
}

export default ProfileClass;
