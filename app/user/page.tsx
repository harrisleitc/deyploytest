// src/components/UserList.tsx
import React from 'react';
import { Table } from '@radix-ui/themes';

// User interface for type safety
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Mock data for users
export const mockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Williams', email: 'alice.williams@example.com', role: 'Product Owner' }
];

interface UserListProps {
  users?: User[];
}

const UserList: React.FC<UserListProps> = ({ 
  users = mockUsers 
}) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      
      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.role}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default UserList;