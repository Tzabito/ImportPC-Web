import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Reemplaza caracteres no válidos por guiones
    .replace(/^-+|-+$/g, '');    // Elimina guiones al inicio o al final
}
