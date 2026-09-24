import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';
import type { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(
  ...args: undefined extends RootStackParamList[T]
    ? [screen: T, params?: RootStackParamList[T]]
    : [screen: T, params: RootStackParamList[T]]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...(args as [any, any]));
  }
}

export function resetTo<T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name, params }] }),
    );
  }
}
