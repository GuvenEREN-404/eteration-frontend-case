import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { beforeEach } from 'node:test';
import FilterCard from '@/app/components/filterCards/SortedCard';
import { sortByDateNewToOld, sortByDateOldToNew, sortByPriceHighToLow, sortByPriceLowToHigh } from '@/app/_redux/features/product-slice';
import { store } from '../_redux/store';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));


beforeEach(() => {
  mockDispatch.mockClear();
});

test('FilterCard component renders correctly and dispatches actions on radio button clicks', () => {
  render(
    <Provider store={store}>
      <FilterCard />
    </Provider>
  );


  const oldToNewRadio = screen.getByText(/Old to new/i);
  fireEvent.click(oldToNewRadio);
  expect(mockDispatch).toHaveBeenCalledWith(sortByDateOldToNew());

  // New to old radio button
  const newToOldRadio = screen.getByText(/New to old/i);
  fireEvent.click(newToOldRadio);
  expect(mockDispatch).toHaveBeenCalledWith(sortByDateNewToOld());

  // Price high to low radio button
  const highToLowRadio = screen.getByText(/Price hight to low/i);
  fireEvent.click(highToLowRadio);
  expect(mockDispatch).toHaveBeenCalledWith(sortByPriceHighToLow());

  // Price low to high radio button
  const lowToHighRadio = screen.getByText(/Price low to High/i);
  fireEvent.click(lowToHighRadio);
  expect(mockDispatch).toHaveBeenCalledWith(sortByPriceLowToHigh());
});
