// Module exposed as `remote/RemoteApp`: this is what the App Shell loads.
import { ContextBridge } from './context/ContextBridge';
import { DemoPage } from './pages/DemoPage';

export default function RemoteApp() {
  return (
    <ContextBridge>
      <DemoPage />
    </ContextBridge>
  );
}
