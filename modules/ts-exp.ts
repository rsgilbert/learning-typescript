// See: https://www.typescriptlang.org/docs/handbook/2/modules.html#typescript-specific-es-module-syntax
/// Exporting types

export type Cat = { breed: string; yearOfBirth: number; }

export interface Dog {
    breeds: string[];
    yearOfBirth: number;
}

export const minutes = 51;