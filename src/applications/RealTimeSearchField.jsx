import React, { useState, useEffect } from "react";

function RealTimeSearchableField() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm, users]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="w-2/4 m-auto">
        <h1 className="text-4xl text-center font-bold p-2 m-2">User List</h1>
        <input
          className="p-4 my-2 border rounded-lg justify-center w-full box-border"
          type="text"
          placeholder="Search Users"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {loading ? (
          <div className="flex justify-center">
            <div class="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-blue-600" />
          </div>
        ) : (
          <ul>
            {filteredUsers.map((user) => (
              <li
                className="bg-gray-100 p-4 my-2 h-min rounded-lg hover:bg-gray-200"
                key={user.id}
              >
                <div>
                  <h2>Name: {user.name}</h2>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RealTimeSearchableField;
