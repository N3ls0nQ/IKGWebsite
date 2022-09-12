import Image from "next/image";
import Link from "next/link"
import React, { useEffect, useState } from 'react'

const Post = ({datePublished, coverPhoto, author, slug, content, title, categories}) => {

  const [category, setCategory] = useState("");

  const formatDate = () => {
    var parts = datePublished.split('-');
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    return mydate.toLocaleDateString();
  }

  
  useEffect(() => {
    categories.forEach((category) => {setCategory( (value) =>
      `${value !== "" ? `${value} &` : ""} ${category.name}`
    )})
  },[])

  return (
    <div className="hover:scale-105 ease-in duration-200 flex flex-col bg-white p-[15px] rounded-md shadow-lg h-[375px] max-w-[400px] mb-0 md:mb-20">
      <div>
        <Image alt="cover_photo" layout="responsive" height={200} width={350} className="rounded-md" objectFit="cover" src={coverPhoto.url} />
      </div>
      <div className="flex flex-row justify-between text-xs font-light p-2">
        <div>
          <p className="text-sm font-bold">Von {author.name} • <a className="hover:underline font-medium" href={`/blog/kategorien/${category}`}>{category}</a></p>
        </div>
          <Link href={`/blog/datum/${datePublished}`}>
            <a className="text-[#f97316] hover:underline font-semibold text-sm">{formatDate()}</a>
          </Link>
      </div>

      <div className="flex flex-1 flex-col p-2">
          <h3 className="font-bold text-lg pb-2">{title}</h3>
      </div>
      <div className="self-end">
        <Link className="" href={`/blog/${slug}`}>
          <a className="ease-in p-2 duration-150 self-end mt-5 bg-transparent hover:text-[#f97316] hover:border-[#f97316] border text-slate-800">Mehr...</a>
        </Link>
      </div>
    </div>

  )
}

export default Post