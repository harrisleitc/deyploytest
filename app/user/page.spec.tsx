import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList, { mockUsers } from '../UserList';
import { Theme } from '@radix-ui/themes';
import { describe, it } from 'node:test';

// Mock Radix UI Theme to ensure proper rendering
const renderWithTheme = (component: React.ReactNode) => {
  return render(
    <Theme>{component}</Theme>
  );
};

describe('UserList Component', () => {
  it('renders the correct number of users', () => {
    renderWithTheme(<UserList />);
    
    const tableRows = screen.getAllByRole('row');
    // +1 to account for the header row
    expect(tableRows.length).toBe(mockUsers.length + 1);
  });

  it('displays user information correctly', () => {
    renderWithTheme(<UserList />);
    
    mockUsers.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.role)).toBeInTheDocument();
    });
  });

  it('renders with custom user list', () => {
    const customUsers = [
      { id: 5, name: 'Test User', email: 'test@example.com', role: 'Tester' }
    ];

    renderWithTheme(<UserList users={customUsers} />);
    
    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('Tester')).toBeInTheDocument();
  });
});

function expect(length: any) {
    throw new Error('Function not implemented.');
}
