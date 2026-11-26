import { lazy } from 'react';
import { AppHeader } from '../components/organisms/AppHeader';
import { RemoteSlot } from '../components/organisms/RemoteSlot';
import { ShellLayout } from '../components/templates/ShellLayout';
import { useGlobalContext } from '../hooks/useGlobalContext';
import styles from './HomePage.module.css';

// Its code does not live in the App Shell: it is downloaded on render from the remote's remoteEntry.js.
const RemoteApp = lazy(() => import('remote/RemoteApp'));

export function HomePage() {
  const { clicks, resetClicks } = useGlobalContext();

  return (
    <ShellLayout
      header={
        <AppHeader
          eyebrow="App Shell · host"
          title="Microfrontend Demo with Vite Federation"
          clicks={clicks}
          onResetClicks={resetClicks}
        />
      }
    >
      <p className={styles.intro}>
        The dashed box is the remote microfrontend: it is built and deployed separately, and the
        App Shell loads it at runtime with Module Federation.
      </p>

      <RemoteSlot name="mfe-remote">
        <RemoteApp />
      </RemoteSlot>
    </ShellLayout>
  );
}
