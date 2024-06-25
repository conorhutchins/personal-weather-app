import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.mock('./views/MainView/MainView', () => ({
  MainView: () => <div>MainView Component</div>,
}));

jest.mock('./views/DetailsView/DetailsView', () => ({
  DetailsView: () => <div>DetailsView Component</div>,
}));

describe('App', () => {
  it('renders the header correctly', () => {
    render(<App />);

    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('United Kingdom')).toBeInTheDocument();
    expect(screen.getByText(/^\d{2}:\d{2}\s[AP]M$/i)).toBeInTheDocument(); // Matches the time format
  });

  it('renders MainView by default', () => {
    window.history.pushState({}, 'MainView', '/');
    render(<App />);

    expect(screen.getByText('MainView Component')).toBeInTheDocument();
  });

  it('navigates to DetailsView when a link is clicked', async () => {
    window.history.pushState({}, 'DetailsView', '/details/test-city');
    render(<App />);

    expect(screen.getByText('DetailsView Component')).toBeInTheDocument();
  });
});
