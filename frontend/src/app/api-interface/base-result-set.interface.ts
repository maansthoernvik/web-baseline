/**
 * Standard return structure of REST API result set.
 */
export interface BaseResultSetInterface {
  count: number;
  next: string;
  previous: string;
  results: any[];
}
