import Head from 'next/head'
import Aktuelles from '../components/Aktuelles'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ShowcaseSection from '../components/ShowcaseSection'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper"
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Scrollbar from "smooth-scrollbar"

import {GraphQLClient, gql} from "graphql-request" 
import matter from "gray-matter"
import Post from '../components/Post'
import { useEffect } from 'react'
import { AiFillFileUnknown } from 'react-icons/ai'

const graphcms = new GraphQLClient("https://api-eu-central-1.hygraph.com/v2/cl7jte8jx17ac01ung0kk9xtz/master")
const QUERY = gql`
  {
    posts{
      id,
      title,
      datePublished,
      slug,
      content {
        html
      },
      author{
        name,
        avatar{
          url
        }
      }
      coverPhoto{
        url
      }
    }
  }
`

export default function Home({posts}) {

  useEffect(() => {
    SwiperCore.use([Autoplay]);
  },[])

  return (
    <div id="scrollbar">
      <Head>
        <title>Immanuel-Kant-Gymnasium Leinfelden-Echterdingen</title>
        <link rel="icon" href="/IKG-Logo.jpg" />
      </Head>

      {/* //Hero Section */}
      <Hero heading="Immanuel-Kant-Gymnasium" message="Herzlich Willkommen am"/>

      {/* //Showcase Section */}
      <ShowcaseSection/>
      
      {/* //Blog Section */}
      <div id="aktuelles" className='flex flex-col justify-center items-center m-10'>
        <div className='flex flex-row items-center justify-center'>
          <h3 className='text-3xl font-bold'>Aktuelles</h3>
          <h2 className='mx-4 text-2xl'>|</h2>
          <h1 className='text-lg'>Die neusten Blogbeiträge</h1>
        </div>

        <Swiper className='w-full my-6' 
            spaceBetween={0} 
            slidesPerView={4} 
            grabCursor={true}
            slidesPerGroup={4}
            modules={[Pagination]} 
            pagination={{dynamicBullets: true, clickable: true}}
            autoplay={{delay: 2000}}>

            {posts.map((post, index) => (
              <SwiperSlide>
                <Post key={index} {...post}/>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}
export async function getStaticProps() {

  //Get posts from graphcms
  const {posts} = await graphcms.request(QUERY)

  console.log(posts) 

  return {
    props: {
      posts,
      // frontmatter
    },
    revalidate: 10,
  }
}