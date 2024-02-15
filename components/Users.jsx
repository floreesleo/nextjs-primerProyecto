// "use client";

import Link from "next/link";

export default function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-zinc-200 mb-2 p-4 rounded-md text-black flex justify-between">
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
        </Link>
      ))}
    </ul>
  );
}
