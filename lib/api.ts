import { GetServerSideProps } from "next"

export type User = {
    id: number
    name: string
    email: string
    role: string
  }
  
  export async function fetchUsers(): Promise<User[]> {
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
  
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
    ]
  }

  export const getServerSideProps: GetServerSideProps = async () => {
      const users = await fetchUsers();

      return {
          props: {
              users,
          },
      };
  };
  