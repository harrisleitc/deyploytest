"use client"

import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Table } from '@radix-ui/themes'

// Define the User type
type User = {
  id: number
  name: string
  email: string
  role: string
}

// Mock data for users
const initialMockUsers: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Admin' },
]

export default function UserListTable() {
  const [users, setUsers] = useState<User[]>(initialMockUsers)
  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({ name: '', email: '', role: '' })
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1
    setUsers(prev => [...prev, { id, ...newUser }])
    setNewUser({ name: '', email: '', role: '' })
    setIsOpen(false)
  }

  return (
    <>
      <div className="mb-4">
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add New User
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
              <Dialog.Title className="text-lg font-bold mb-4">Add New User</Dialog.Title>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="role" className="block mb-1">Role</label>
                  <select
                    id="role"
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded"
                    required
                  >
                    <option value="">Select a role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Editor">Editor</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Add User
                  </button>
                </div>
              </form>
              <Dialog.Close asChild>
                <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
      <Table.Root className="w-full border-collapse border border-gray-300">
        <Table.Header>
          <Table.Row className="bg-gray-100">
            <Table.ColumnHeaderCell className="p-2 text-left font-bold">ID</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left font-bold">Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left font-bold">Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="p-2 text-left font-bold">Role</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id} className="border-t border-gray-300">
              <Table.Cell className="p-2">{user.id}</Table.Cell>
              <Table.Cell className="p-2">{user.name}</Table.Cell>
              <Table.Cell className="p-2">{user.email}</Table.Cell>
              <Table.Cell className="p-2">{user.role}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <div>Hello work</div>
      <div>Hello harris</div>
      <div>Hello</div>
      <div>Hello work</div>
      <div>Hello harris</div>
      <div>Hello</div>
    </>
  )
}