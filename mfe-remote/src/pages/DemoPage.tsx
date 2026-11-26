import { DemoCard } from '../components/organisms/DemoCard';
import { RemoteLayout } from '../components/templates/RemoteLayout';
import { useSharedState } from '../hooks/useSharedState';

export function DemoPage() {
  const { clicks, registerClick, source } = useSharedState();

  return (
    <RemoteLayout>
      <DemoCard clicks={clicks} source={source} onRegisterClick={registerClick} />
    </RemoteLayout>
  );
}
