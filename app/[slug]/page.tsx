import React from 'react'

const BlogPage = ({params}: {params: {slug: string}}) => {
    const {slug} = params
  return (
    <section className='py-10 px-4 max-w-7xl w-full m-auto'>
      <h2 className='text-text text-5xl'>{slug}</h2>
    </section>
  )
}

export default BlogPage