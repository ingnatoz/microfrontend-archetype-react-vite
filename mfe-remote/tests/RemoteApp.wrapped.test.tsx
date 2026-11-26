import type { Context } from 'react';
import { render, screen } from '@testing-library/react';
import type { GlobalContextValue } from 'host/GlobalContext';
import { describe, expect, it, vi } from 'vitest';
import RemoteApp from '../src/RemoteApp';

// This is how the federation plugin delivers a module without `export default` when it is
// loaded with a dynamic import(): wrapped in { default: module }.
vi.mock('host/GlobalContext', async () => {
  const { createContext } = await import('react');
  return { default: { GlobalContext: createContext<GlobalContextValue | null>(null) } };
});

describe('RemoteApp with the host module wrapped in { default }', () => {
  it('still finds the App Shell context', async () => {
    const mod = (await import('host/GlobalContext')) as unknown as {
      default: { GlobalContext: Context<GlobalContextValue | null> };
    };
    const { GlobalContext } = mod.default;

    render(
      <GlobalContext
        value={{ clicks: 2, registerClick: vi.fn<() => void>(), resetClicks: vi.fn<() => void>() }}
      >
        <RemoteApp />
      </GlobalContext>,
    );

    expect(await screen.findByText('Connected to the App Shell context · clicks: 2')).toBeInTheDocument();
  });
});
