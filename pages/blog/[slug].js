import {GraphQLClient, gql} from "graphql-request" 
import { IoLogoChrome } from "react-icons/io";
import Post from '../../components/Post'

const graphcms = new GraphQLClient("https://api-eu-central-1.hygraph.com/v2/cl7jte8jx17ac01ung0kk9xtz/master")
const QUERY = gql`
  query Post($slug: String!){
    post(where: {slug: $slug}){
        id,
        title,
        slug,
        datePublished,
        author{
            id,
            name,
            avatar{
                url,
            }
        },
        content {
            html,
        },
        coverPhoto {
            id,
            url,
        }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
        slug
    }
  }
` 

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST)
    return{
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false,
    }
}

export async function getStaticProps({params}) {

    const slug = params.slug;
    //Get posts from graphcms
    const data = await graphcms.request(QUERY, {slug})
    const post = data.post;

    console.log("Post", post)
  
    return {
      props: {
        post,
      },
      revalidate: 10,
    }
}

export default function PostPage({post}){
    return(
        <main className="h-[100vh]">
          <div className="h-24 bg-zinc-800 mb-10"></div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <h1 className="font-bold text-3xl">{post.title}</h1>
            </div>
              <div className="flex m-3">
                <h1 className="font-medium text-xl">Von {post.author.name}</h1>
                <h1 className="text-xl mx-3">|</h1>
                <h1 className="font-medium text-xl">{post.datePublished}</h1>
              </div>
            <img src={post.coverPhoto.url} className="max-w-6xl mb-16"/>
            <div className="text-2xl px-10" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
          </div>
        </main>
    )
}
