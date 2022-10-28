async function getData() {
    const res = await fetch('http://localhost:1337/api/jobs?populate=*');
    console.log(res);
    return res.json();
}

export default async function JobPage() {
  const data = await getData();
  return <p>Hello</p>
}