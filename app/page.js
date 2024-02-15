async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const users = await fetchUsers();
  return (
    <ul>
      {users.map((user) => (
        <li
          key={user.id}
          className="bg-zinc-200 mb-2 p-4 rounded-md text-black flex justify-between"
        >
          <div>
            <h5 className="font-bold">
              {user.id} | {user.first_name} {user.last_name}
            </h5>
            <p>
              Email: <span className="text-blue-800">{user.email}</span>
            </p>
          </div>
          <img src={user.avatar} className="rounded-full w-16" />
        </li>
      ))}
    </ul>
  );
}
