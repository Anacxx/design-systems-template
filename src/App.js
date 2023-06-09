import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { ChakraProvider } from '@chakra-ui/react'
import NovoCard from "./NovoCard";
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <>
      <ChakraProvider>
        {users.map((user) =>{
          console.log(user)
          return <Card key={user.id} user={user}/>
        })}
                {users.map((user) =>{
          console.log(user)
          return <NovoCard key={user.id} user={user}/>
        })}
      </ChakraProvider>
    </>
  );
}
