import {GraphQLClient, gql} from 'graphql-request'
import NavBar from '../components/NavBar';
import BlogCard from '/components/BlogCard.js'
import Footer from '../components/Footer';
import Head from 'next/head'

const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clckiz8mj1fr101ukd1cqfzkm/master");

//TODO: TEST IF THE PUBLISHED ON FILTER IS WORKING
const QUERY = gql`
{
  posts(orderBy: publishedOn_DESC){ 
    category
    createdAt
    id
    publishedAt
    publishedOn
    slug
    title
    updatedAt
    content {
      html
    }
    description
  }
}`;


export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}



export default function Blog({posts}){
    return (<>
        <Head>
        <title>Blog | Ahmed Saad</title>
        <meta name="description" content="Ahmed Abdul Saad's Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>
                
        <div className='flex flex-col justify-center w-full px-5 max-w-3xl mx-auto mb-16 overflow-x-hidden'>
            <NavBar/>
            <div className='TITLE font-bold text-4xl  md:mt-16 md:text-5xl'>Blog</div>
            <div className='BLOGINTRO text-lg md:text-md text-gray-500 my-5'>Hey there! Welcome to my blog. I write about tech, web dev, life, fitness and anything else about life. I usually write up articles whenever I find some cool stuff to talk about.</div>
            <div className='BLOGCARDS space-y-6'>
            { 
            posts.map((post) => (
                <BlogCard 
                    title={post.title} 
                    author={post.author} 
                    publishedOn={post.publishedOn}
                    slug={post.slug}
                    description={post.description} />
            )
            )}
            </div>
            <div className='mt-16 w-full'><Footer/></div>
        </div>
        </>
    )
}