export interface RequestState {
  start: GenericObject;
  success: GenericObject;
  error: GenericObject;
}
export type GenericObject = { [key: string]: any };
