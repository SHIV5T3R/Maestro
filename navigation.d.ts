import type {StackParamList} from './src/navigation/RootNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
