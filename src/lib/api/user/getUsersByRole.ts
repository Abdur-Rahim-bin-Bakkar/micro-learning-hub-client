const getUsersByRole = async (
  role: string
) => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/role/${role}`,
    {
      cache: "no-store",
    }
  );


  if (!res.ok) {
    throw new Error(
      "Failed to fetch users"
    );
  }


  const data = await res.json();


  return data.data;

};


export default getUsersByRole;