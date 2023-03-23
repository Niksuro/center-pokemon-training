import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeDecomposerService {

  constructor() { }
  /**
   * Function that transform the pokeApi response JSON
   * to a simple string Array.
   * @param typos each field from JSON
   * @returns an array with just the names
   */
  decomposeType (typos: any[]) {
    const arrayDecompose: string[] = [];
    typos.forEach(typo => {
      arrayDecompose.push(typo.name);
    });
    return arrayDecompose;
  }
}
