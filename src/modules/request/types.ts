import { createTypes } from '@next/store/utils';

export interface RequestState {
  requestSuccess: GenericObject | undefined;
  requestError: Error | undefined;
  requestStart: boolean;
}
export type GenericObject = { [key: string]: any };
