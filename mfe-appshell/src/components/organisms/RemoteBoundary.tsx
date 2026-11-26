import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ErrorMessage } from '../molecules/ErrorMessage';

interface RemoteBoundaryProps {
  name: string;
  children: ReactNode;
}

interface RemoteBoundaryState {
  hasError: boolean;
}

/**
 * Isolates microfrontend failures: if its remoteEntry.js does not respond or fails to
 * render, the App Shell keeps working and shows a notice.
 */
export class RemoteBoundary extends Component<RemoteBoundaryProps, RemoteBoundaryState> {
  state: RemoteBoundaryState = { hasError: false };

  static getDerivedStateFromError(): RemoteBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`[mfe-appshell] Could not load ${this.props.name}.`, error, info.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      // shortcut: retry reloads the whole page (React.lazy caches the failed import);
      // switch to a per-microfrontend retry if the App Shell holds state that must not be lost.
      <ErrorMessage title="Could not load the remote microfrontend." onRetry={() => window.location.reload()}>
        Check that <code>{this.props.name}</code> is running.
      </ErrorMessage>
    );
  }
}
