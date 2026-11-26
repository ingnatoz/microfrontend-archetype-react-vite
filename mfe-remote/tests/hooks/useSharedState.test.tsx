import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useSharedState } from '../../src/hooks/useSharedState';

describe('useSharedState', () => {
  it('throws outside <ContextBridge>', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => renderHook(() => useSharedState())).toThrow(
      'useSharedState must be used within <ContextBridge>.',
    );

    consoleError.mockRestore();
  });
});
