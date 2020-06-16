import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';
import { showData } from './data';

jest.mock('./api/fetchShow');

test('renders the loading state', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText(/fetching/i)).toBeInTheDocument();
  });
});

test('renders the summary from API call', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText(/a love letter/i)).toBeInTheDocument();
  });
});

test('renders the episode list when a dropdown is chosen', async () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText(/a love letter/i)).toBeInTheDocument();
  });
  userEvent.click(getByText(/select a season/i));
  userEvent.click(getByText(/season 1/i));
  await waitFor(() => {
    expect(getByText(/the vanishing of will byers/i)).toBeInTheDocument();
  });
});
