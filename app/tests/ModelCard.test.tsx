import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ModelCard from '../components/filterCards/ModelCard';

const mockStore = configureStore();

const initialState: any = {
  productReducer: {
      models: {
          brand1: ['model1', 'model2'],
          brand2: ['model3', 'model4'],
      },
      brands: [],
      sortType: '',
      allProducts: [],
      filterProduct: []
  },
};

describe('ModelCard Component', () => {
  test('renders ModelCard with no selected models', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ModelCard selectedBrands={['brand1']} />
      </Provider>
    );

    expect(screen.getByText(/Models/i)).toBeInTheDocument();
    expect(screen.getByText(/No models selected/i)).toBeInTheDocument();
  });

  test('renders ModelCard with selected models', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ModelCard selectedBrands={['brand1']} />
      </Provider>
    );

    expect(screen.getByText(/Models/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/model1/i)).toBeChecked();
    expect(screen.getByLabelText(/model2/i)).toBeChecked();
  });

  test('handles model toggle correctly', () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ModelCard selectedBrands={['brand1']} />
      </Provider>
    );

    expect(screen.getByLabelText(/model3/i)).not.toBeChecked();

    fireEvent.click(screen.getByLabelText(/model3/i));

    expect(screen.getByLabelText(/model3/i)).toBeChecked();

    expect(store.getActions()).toEqual([
      { type: 'product-slice/filterModelProduct', payload: { model: ['model3'], brand: ['brand1'] } },
    ]);
  });
});