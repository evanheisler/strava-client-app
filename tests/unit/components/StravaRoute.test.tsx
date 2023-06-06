import { render, screen } from '@testing-library/react';
import { StravaRoute } from '../../../src/components/StravaRoute';
import { StravaRouteType } from '../../../src/types';

const mockRoute = (overrides?: Partial<StravaRouteType>) => ({
  id: '123',
  name: 'Test Route',
  estimated_moving_time: 30000,
  ...overrides,
});

it('displays a route', () => {
  const route = mockRoute();

  render(<StravaRoute route={route} />);

  screen.getByText(route.name);
  screen.getByText('08:20:00'); // 30000 seconds = 8.33 hours
});
