
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await new Promise<{ id: string }>((resolve) => setTimeout(() => resolve(params), 2000));
  
  
  return (
    <div className="fade-in">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <h2>User ID: {id}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quisquam, voluptatibus, quisquam, voluptatibus, quisquam,
        voluptatibus, quisquam, voluptatibus, quisquam, voluptatibus, quisquam,
        voluptatibus, quisquam, voluptatibus, quisquam, voluptatibus, quisquam,
        voluptatibus.
      </p>
      <Link href='/dashboard/users' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"> Go To Users</Link>
      
    </div>
  );
};

export default page;
