import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import { SingleBlog } from "@/utils/types";
import { PortableText } from "@portabletext/react";

export const revalidate = 30

const getBlog = async (slug: string) => {
  const query = `*[_type == "blog" && slug.current == "${slug}"]{
    "slug": slug.current,
      title,
      content,
      banner
  }[0]
  `;

  const data = await client.fetch(query);
  return data;
};

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const data: SingleBlog = await getBlog(params.slug);

  return (
    <section className="pb-10 pt-5 px-4 max-w-7xl w-full m-auto">
      <h2 className="text-text md:text-4xl text-3xl tracking-tight uppercase text-center text-pretty font-bold leading-8">{data.title} Lorem ipsum dolor sit.</h2>

      <Image
        src={urlFor(data.banner).url()}
        alt={data.slug}
        width={1000}
        height={300}
        priority
        className="max-w-5xl w-full mx-auto rounded-md my-8"
      />
      
      <div className="prose prose-lg max-w-6xl w-full mx-auto prose-invert max-sm:prose-p:text-[16px]">
        <PortableText value={data.content} />
      </div>
    </section>
  );
};

export default BlogPage;
