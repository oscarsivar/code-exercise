/**
 * customTable.interface.ts
 *
 * This file centralize all the interefaces needed Throughout the app.
 *
 *
 * Author: Oscar Elías
 * Date: 16-06-2024
 */

export enum Status {
    inactive = 'Inactive',
    active = 'Active',
}

export type Order = 'asc' | 'desc';

export interface Column {
    id: 'name' | 'favoriteFood' | 'favoriteMovie' | 'timeStamp';
    label: string;
    minWidth?: number;
    align?: 'right';
};

export interface Data {
    id: number
    name: string
    favoriteFood: string
    favoriteMovie: string
    status: Status
    timeStamp: string
  }