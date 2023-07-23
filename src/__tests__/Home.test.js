import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Home from './Home';
import MockAdapter from 'axios-mock-adapter';

describe('Home component', () => {
  // Create a new instance of the mock adapter
  const mock = new MockAdapter(axios);

  // Clean up the sessionStorage after each test
  afterEach(() => {
    sessionStorage.clear();
  });

  it('renders without crashing', () => {
    render(<Home />);
    // Assert that the Home component is rendered
    expect(screen.getByTestId('home-component')).toBeInTheDocument();
  });

  it('displays the welcome message for authenticated users', async () => {
    // Mocking user data for authenticated user
    const user = {
      username: 'testUser',
    };
    sessionStorage.setItem('user', JSON.stringify(user));

    // Mocking the Axios request for user data
    mock.onGet('/api/user').reply(200, user);

    render(<Home />);
    // Assert that the welcome message contains the username
    expect(await screen.findByText('Welcome testUser')).toBeInTheDocument();
  });

  it('displays the signup and login buttons for non-authenticated users', () => {
    render(<Home />);
    // Assert that the signup and login buttons are displayed for non-authenticated users
    expect(screen.getByText('Sign Up Now')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  // Add more tests for different parts of the Home component as needed
  // For example, test if the trending meals section and helpful tips section are displayed correctly.
});