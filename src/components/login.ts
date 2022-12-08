import Component from '../lib/components';
import Elements from '../lib/elements';

class LoginComponent extends Component {
  constructor() {
    super({
      name: 'Login',
      model: {},
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    const loginContainer = document.createElement('div');
    loginContainer.appendChild(
      Elements.createHearder({
        textContent: 'Welcome to this page',
      }),
    );
    return loginContainer;
  }
}

export default LoginComponent;
