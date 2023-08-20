import { shallowMount } from '@vue/test-utils';
import CreatedAccount from '../CreatedAccount.vue'; // Update the path as needed

describe('CreatedAccount', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(CreatedAccount);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the success message', () => {
    const wrapper = shallowMount(CreatedAccount);
    const successMessage = wrapper.find('h3');
    expect(successMessage.exists()).toBe(true);
    expect(successMessage.text()).toBe('Sucesso agora é só fazer o login!');
  });

  it('redirects to "/login" when "Login" button is clicked', () => {
    const $router = { push: jest.fn() };
    const wrapper = shallowMount(CreatedAccount, {
      mocks: {
        $router
      }
    });

    const loginButton = wrapper.find('[to="/login"]');
    loginButton.trigger('click');

    expect($router.push).toHaveBeenCalledWith('/login');
  });
});