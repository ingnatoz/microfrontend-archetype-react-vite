import { fireEvent, render, screen } from '@testing-library/react';
import { GlobalContext } from 'host/GlobalContext';
import { describe, expect, it, vi } from 'vitest';
import RemoteApp from '../src/RemoteApp';

describe('RemoteApp inside the App Shell', () => {
  it('reads and updates the host shared state', async () => {
    const registerClick = vi.fn<() => void>();

    render(
      <GlobalContext value={{ clicks: 5, registerClick, resetClicks: vi.fn<() => void>() }}>
        <RemoteApp />
      </GlobalContext>,
    );

    expect(await screen.findByText('Connected to the App Shell context · clicks: 5')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Register click' }));
    expect(registerClick).toHaveBeenCalledTimes(1);
  });
});
