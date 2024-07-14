const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;

interface newCallback {
  (a: number): number;
}
const callback: newCallback = (a: number) => {
  return 100 + a;
};