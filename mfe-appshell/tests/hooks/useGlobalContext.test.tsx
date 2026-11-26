import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useGlobalContext } from '../../src/hooks/useGlobalContext';

describe('useGlobalContext', () => {
  it('throws outside <GlobalProvider>', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => renderHook(() => useGlobalContext())).toThrow(
      'useGlobalContext must be used within <GlobalProvider>.',
    );

    consoleError.mockRestore();
  });
});
