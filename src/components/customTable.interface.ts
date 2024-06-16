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