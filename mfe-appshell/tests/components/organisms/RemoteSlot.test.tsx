import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RemoteSlot } from '../../../src/components/organisms/RemoteSlot';

function BrokenRemote(): never {
  throw new Error('remoteEntry.js unavailable');
}

describe('RemoteSlot', () => {
  it('renders the microfrontend when there are no errors', () => {
    render(
      <RemoteSlot name="mfe-remote">
        <p>remote ok</p>
      </RemoteSlot>,
    );

    expect(screen.getByText('remote ok')).toBeInTheDocument();
  });

  it('shows a notice instead of breaking the App Shell when the remote fails', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <RemoteSlot name="mfe-remote">
        <BrokenRemote />
      </RemoteSlot>,
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Could not load the remote microfrontend.');
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument();

    consoleError.mockRestore();
  });
});
