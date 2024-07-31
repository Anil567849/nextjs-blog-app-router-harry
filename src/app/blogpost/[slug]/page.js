
// Server-Side Data Fetching: Data is fetched on the server, ensuring it is present in the initial HTML response. - You can check view-page-source on chrome you will find Title and Content

const fetchData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/getblogpost/${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  let {data} = await res.json();
  return JSON.parse(data);
};

export default async function Blogpost({ params }) {

  const data = await fetchData(params.slug);


  return (
    <div>
      <h1>Blogpost: {data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}


