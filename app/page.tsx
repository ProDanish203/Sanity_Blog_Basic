import { Card } from "@/components/cards";
import { client } from "@/lib/sanity";
import { Blogs } from "@/utils/types";

export const revalidate = 30


const getBlogs = async () => {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
    title,
    "slug": slug.current,
    description,
    banner
  }` 
  const data = await client.fetch(query)
  return data
}

export default async function Home() {

  const data: Blogs[] = await getBlogs();

  return (
    <main className="max-w-7xl w-full mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {data.map((blog, idx) => (
          <Card data={blog} key={idx}/>
        ))}
      </div>
    </main>
  );
}
