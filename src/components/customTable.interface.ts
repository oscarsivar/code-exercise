export interface Column {
    id: 'name' | 'favoriteFood' | 'favoriteMovie' | 'timeStamp';
    label: string;
    minWidth?: number;
    align?: 'right';
};