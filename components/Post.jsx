import Link from "next/link"
import React from 'react'

const Post = ({datePublished, coverPhoto, author, slug, content, title}) => {

  // const parser = new DOMParser();

  const truncate = (str, n = 150, useWordBoundary) => {

    const doc = parser.parseFromString(str, "text/html").getElementsByTagName("*");
    [...doc].forEach(element => {
      console.log(element)
    });
    console.log("DOC:", doc)

    if (str.length <= n) { return str; }
    const subString = str.slice(0, n-1); // the original check
    return (useWordBoundary 
      ? subString.slice(0, subString.lastIndexOf(" ")) 
      : subString) + '\u2026';
  };

  return (
    <div className="hover:scale-105 ease-in duration-200 flex flex-col bg-white p-[15px] rounded-md shadow-lg h-[375px] max-w-[400px] mb-0 md:mb-20">
      <img className="rounded-md max-w-[350px]m max-h-[250px]" src={coverPhoto.url} />
      <div className="flex flex-row justify-between text-xs font-light p-2">
          <p className="text-[#f97316]">{datePublished}</p>
          <p>Von {author.name}</p>
      </div>

      <div className="flex flex-1 flex-col p-2">
          <h3 className="font-bold text-lg pb-2">{title}</h3>
          {/* //TODO: Generate preview for text
          <div className="font-regular text-sm mb-10" dangerouslySetInnerHTML={{__html: content.html}}></div> */}
          {/* <div className="font-regular text-sm mb-10">{truncate(content.html)}</div> */}
      </div>
      <div className="self-end">
        <Link className="" href={`/blog/${slug}`}>
          <a className="ease-in duration-150 self-end mt-5 bg-transparent hover:text-[#f97316] hover:border-[#f97316] p-1 border text-slate-800">Lesen</a>
        </Link>
      </div>
    </div>

  )
}

export default Post