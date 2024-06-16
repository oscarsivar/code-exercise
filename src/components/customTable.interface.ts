export interface Column {
    id: 'name' | 'favoriteFood' | 'favoriteMovie';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
};