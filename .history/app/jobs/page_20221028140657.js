async function getData() {
    const res = await fetch('http://localhost:1337/api/jobs?populate=*');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    return res.json();
  }

export default function JobPage() {

}