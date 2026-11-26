import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import RemoteApp from '../src/RemoteApp';

// Simulates an App Shell remoteEntry.js that does not respond.
vi.mock('host/GlobalContext', () => {
  throw new Error('host remoteEntry.js unavailable');
});

describe('RemoteApp in standalone mode', () => {
  it('uses the local context when the App Shell is unavailable', async () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});

    render(<RemoteApp />);

    await waitFor(() => expect(consoleWarn).toHaveBeenCalled());
    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('Standalone mode (local context) · clicks: 0');

    fireEvent.click(screen.getByRole('button', { name: 'Register click' }));
    expect(status).toHaveTextContent('Standalone mode (local context) · clicks: 1');

    consoleWarn.mockRestore();
  });
});
