import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { DiscountPromo } from './discount-promo';
import { mockStore, getMockStore } from '../../helpers/get-mock-store';

describe('DiscountPromo Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = getMockStore();
  });

  test('should be rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DiscountPromo />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Промокод на скидку')).toBeInTheDocument();
  });
});