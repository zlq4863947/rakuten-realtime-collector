import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

export const skipNullOrUndefined = <T>(): OperatorFunction<null | undefined | T, T> => {
  function isNotNullOrUndefined(input: null | undefined | T): input is T {
    return input != null;
  }

  return (source$) => {
    return source$.pipe(filter(isNotNullOrUndefined));
  };
};
