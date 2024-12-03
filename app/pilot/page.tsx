
'use client';

import { Table } from '@radix-ui/themes';
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'active',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'active',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'User',
    status: 'inactive',
  },
];

export default function UserList() {
  const [users] = useState<User[]>(mockUsers);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Table.Root className="w-full border-collapse">
        <Table.Header>
          <Table.Row className="bg-gray-100">
            <Table.ColumnHeaderCell className="p-2 text-left border">ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left border">Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left border">Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left border">Role</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left border">Status</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id} className="hover:bg-gray-50">
              <Table.Cell className="p-2 border">{user.id}</Table.Cell>
              <Table.Cell className="p-2 border">{user.name}</Table.Cell>
              <Table.Cell className="p-2 border">{user.email}</Table.Cell>
              <Table.Cell className="p-2 border">{user.role}</Table.Cell>
              <Table.Cell className="p-2 border">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {user.status}
                </span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
}