async function getData() {
    const res = await fetch('http://localhost:1337/api/jobs?populate=*');
    return res.json();
}

export default async function JobPage() {
  const response = await getData();
  const job = response?.data[0]?.attributes
  return (
    <>
      
    </>
  )
}