export enum Gender {
  male = 'male',
  female = 'female',
  unknown = 'unknown',
}
export interface Character {
  name: string;
  gender: Gender;
  'holding pee': boolean;
  'peeing self': boolean;
}
export interface Root extends Array<Character> {}
