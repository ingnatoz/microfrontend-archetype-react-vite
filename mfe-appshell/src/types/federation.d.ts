// Contracts of the federated modules that the App Shell consumes.
// TypeScript cannot see code from other builds, so each module is declared here.

declare module 'remote/RemoteApp' {
  import type { ComponentType } from 'react';

  const RemoteApp: ComponentType;
  export default RemoteApp;
}
