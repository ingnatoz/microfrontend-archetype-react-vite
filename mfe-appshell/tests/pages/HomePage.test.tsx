import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GlobalProvider } from '../../src/context/GlobalProvider';
import { HomePage } from '../../src/pages/HomePage';

const renderPage = () =>
  render(
    <GlobalProvider>
      <HomePage />
    </GlobalProvider>,
  );

describe('HomePage', () => {
  it('shows the App Shell and mounts the remote microfrontend', async () => {
    renderPage();

    expect(
      screen.getByRole('heading', { name: 'Microfrontend Demo with Vite Federation' }),
    ).toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'click from the remote' })).toBeInTheDocument();
  });

  it('shows the remote clicks in the header and resets them', async () => {
    renderPage();

    const remoteButton = await screen.findByRole('button', { name: 'click from the remote' });
    fireEvent.click(remoteButton);
    fireEvent.click(remoteButton);

    const counter = screen.getByRole('status', { name: 'Shared clicks' });
    expect(counter).toHaveTextContent('2');

    fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(counter).toHaveTextContent('0');
  });
});
