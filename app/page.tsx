import { Card } from "@/components/cards";
import { blogs } from "@/utils/data";

export default function Home() {
  return (
    <main className="max-w-7xl w-full mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {blogs.map((blog, idx) => (
          <Card data={blog} key={idx}/>
        ))}
      </div>
    </main>
  );
}
