import { render, screen } from '@testing-library/react';
import * as ReactQuery from 'react-query';
import { vi } from 'vitest';
import { StravaRoute } from '../../../src/components/StravaRoute';
import { StravaRouteType } from '../../../src/types';

vi.spyOn(ReactQuery, 'useQuery').mockImplementation(
  vi.fn().mockReturnValue({
    data: { segments: [{ name: 'Test Segment', id: 'lkjsdf' }] },
    isLoading: false,
    isSuccess: true,
  })
);

const mockRoute = (overrides?: Partial<StravaRouteType>) => ({
  id: 123,
  id_str: '456',
  name: 'Test Route',
  estimated_moving_time: 30000,
  ...overrides,
});

it('displays a route', () => {
  const route = mockRoute();

  render(<StravaRoute route={route} />);

  screen.getByText(route.name);
  screen.getByText('08:20:00'); // 30000 seconds = 8.33 hours
  screen.getByText('Test Segment');
});
