import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BrandsCard from '../components/filterCards/BrandsCard';

const mockStore = configureStore();

const initialState = {
  productReducer: {
      brands: ['Brand1', 'Brand2', 'Brand3'],
      models: {},
      sortType: '',
      allProducts: [],
      filterProduct: []
  },
};

describe('BrandsCard Component', () => {
  test('renders BrandsCard with no selected brands', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BrandsCard onSelectBrand={() => {}} />
      </Provider>
    );

    // Check if the component renders correctly
    expect(screen.getByText(/Brands/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox')).toHaveLength(3);
  });

  test('handles brand toggle correctly', () => {
    const store = mockStore(initialState);
    const onSelectBrandMock = jest.fn();

    render(
      <Provider store={store}>
        <BrandsCard onSelectBrand={onSelectBrandMock} />
      </Provider>
    );
    expect(screen.getByLabelText(/Brand1/i)).not.toBeChecked();

    fireEvent.click(screen.getByLabelText(/Brand1/i));

    expect(screen.getByLabelText(/Brand1/i)).toBeChecked();

    expect(onSelectBrandMock).toHaveBeenCalledWith(['Brand1']);
    expect(store.getActions()).toEqual([
      { type: 'product-slice/filterBrandProduct', payload: { brand: ['Brand1'] } },
    ]);
  });
});