import './css/style.css';
import LoginComponent from './components/login';

const login = new LoginComponent();

const appContainer = document.querySelector<HTMLDivElement>('#app')!;

appContainer.appendChild(login.render());
