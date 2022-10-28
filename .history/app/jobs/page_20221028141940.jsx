async function getData() {
    const res = await fetch('http://localhost:1337/api/jobs?populate=*');
    return res.json();
}

export default async function JobPage() {
  const response = await getData();
  console.log(response.data);
  return <p>{response?.data?.attributes?.vacancy}</p>
}