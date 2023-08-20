import { shallowMount } from '@vue/test-utils';
import LoginPage from '../Login'; // Update the path as needed

describe('LoginPage', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(LoginPage);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the email and password fields', () => {
    const wrapper = shallowMount(LoginPage);
    const emailField = wrapper.find('[label="Email"]');
    const passwordField = wrapper.find('[label="Senha"]');

    expect(emailField.exists()).toBe(true);
    expect(passwordField.exists()).toBe(true);
  });

  it('redirects to "/panel" when "Entrar" button is clicked', () => {
    const $router = { push: jest.fn() };
    const wrapper = shallowMount(LoginPage, {
      mocks: {
        $router
      }
    });

    const entrarButton = wrapper.find('[color="primary"]');
    entrarButton.trigger('click');

    expect($router.push).toHaveBeenCalledWith('/panel');
  });

  it('redirects to "/register" when "Não tem conta? Crie uma" button is clicked', () => {
    const $router = { push: jest.fn() };
    const wrapper = shallowMount(LoginPage, {
      mocks: {
        $router
      }
    });

    const createAccountButton = wrapper.find('[to="/register"]');
    createAccountButton.trigger('click');

    expect($router.push).toHaveBeenCalledWith('/register');
  });
});