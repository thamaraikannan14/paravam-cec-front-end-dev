import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterrror] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setData(response.data)
      } catch (error) {
        console.log("Error")
        seterrror("Eroor while loading the data");
      }
      finally{
        setloading(false);
      }
    };
    fetchUsers();
  }, []);
  if(error) return <h1>{error}</h1>
  if(loading) return <h1>Loading.....</h1>

  return (
    <>
    {data.map((d) => (
      <li key={d.id}>
        {d.name} - {d.phone}
      </li>
    ))}
    </>
  );
}
export default App;
