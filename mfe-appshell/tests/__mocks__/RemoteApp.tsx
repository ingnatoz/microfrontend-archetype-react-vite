// `remote/RemoteApp` stub for tests. It uses the host context like the real remote.
import { useGlobalContext } from '../../src/hooks/useGlobalContext';

export default function RemoteApp() {
  const { registerClick } = useGlobalContext();

  return (
    <button type="button" onClick={registerClick}>
      click from the remote
    </button>
  );
}
