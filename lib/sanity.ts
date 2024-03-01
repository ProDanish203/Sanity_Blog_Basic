import { createClient } from "next-sanity";
import imageURLBuilder from "@sanity/image-url"

export const client = createClient({
    apiVersion: "2023-05-03",
    dataset: "production",
    projectId: "5xef06jh",
    useCdn: false
});

const builder = imageURLBuilder(client)

export const urlFor = (source: string) => {
    return builder.image(source)
}