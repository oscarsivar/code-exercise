import { RootState } from '../../app/store';
import { dataSlice, updateTimeStamp, dataObjects } from './dataSlice';
import { Status } from '../../components/customTable.interface';

// Mock initial state and data
const initialState = [
  { id: 1, name: 'Oscar', favoriteFood: 'Pizza', favoriteMovie: 'Inception', status: Status.active, timeStamp: '2024-06-17T12:00:00Z' },
  { id: 2, name: 'Rocky', favoriteFood: 'Sushi', favoriteMovie: 'Rocky', status: Status.inactive, timeStamp: '2024-06-16T12:00:00Z' },
  // Add more mock data as needed
];

describe('dataSlice reducer', () => {
  it('should handle updateTimeStamp', () => {
    const newState = dataSlice.reducer(initialState, updateTimeStamp());
    const currentTimeStamp = new Date().toISOString();

    // Check if all timestamps are updated
    expect(newState.every(item => item.timeStamp === currentTimeStamp)).toBe(true);
  });
});

describe('dataObjects selector', () => {
  it('should filter out inactive items', () => {
    // Mock RootState
    const mockState = { data: initialState } as RootState;
    const selectedData = dataObjects(mockState);

    // Check if only active items are selected
    expect(selectedData.every(item => item.status !== Status.inactive)).toBe(true);
  });

  it('should return an empty array if state.data is undefined', () => {
    // Mock RootState with undefined data
    const mockState = { data: undefined } as unknown as RootState;
    const selectedData = dataObjects(mockState);

    // Expect an empty array
    expect(selectedData).toEqual([]);
  });

  it('should return an empty array if state.data is empty', () => {
    // Mock RootState with empty data array
    const mockState = { data: [] } as RootState;
    const selectedData = dataObjects(mockState);

    // Expect an empty array
    expect(selectedData).toEqual([]);
  });
});
