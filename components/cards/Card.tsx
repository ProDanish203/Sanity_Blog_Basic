import { urlFor } from "@/lib/sanity";
import { Blogs } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ data }: {data: Blogs}) => {

  return (
    <div className="rounded-lg py-4 px-3 border-[1px] border-neutral-800">
      <Image
        src={urlFor(data.banner).url()}
        alt={data.title}
        width={400}
        height={300}
        className="rounded-md h-[220px]"
      />

      <div className="my-5">
        {/* <div className="flex gap-2 items-center justify-between">
          <p className="text-neutral-400 text-sm">{data.createdAt}</p>
          <p className="text-neutral-400 text-sm">{data.author}</p>
        </div> */}
        <h2 className="text-text text-3xl font-semibold">{data.title}</h2>
        <p className="text-neutral-500">{data.description.slice(0, 150)}...</p>
      </div>

      <Link href={`/${data.slug}`} className="bg-primary block text-center text-text w-full py-3 rounded-sm">
        Read More
      </Link>
    </div>
  );
};
