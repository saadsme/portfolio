import {GraphQLClient, gql} from 'graphql-request'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Head from 'next/head'
import Image from 'next/image';
import HTMLReactParser from 'html-react-parser';

const HTMLRenderer = ({ htmlContent }) => {
    const parseOptions = {
      replace: (domNode) => {
        if (domNode.name === 'h1' || domNode.name === 'h2' || domNode.name === 'h3') {
          domNode.attribs = {
            ...domNode.attribs,
            className: 'dark:text-gray-300 text-gray-800',
          };
        } else if (domNode.attribs && !domNode.attribs.class) {
          domNode.attribs = {
            ...domNode.attribs,
            className: 'dark:text-gray-300',
          };
        }
      },
    };
  
    return <div>{HTMLReactParser(htmlContent, parseOptions)}</div>;
  };
const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clckiz8mj1fr101ukd1cqfzkm/master");

const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
            id, title, slug, publishedOn, coverPhoto {
              url
            },
            content{ html }
        }
    }
`;

const SLUGLIST = gql`
{
    posts{
        slug
    }
}
`;

export async function getStaticPaths(){
    const {posts} = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post => ({params: {slug: post.slug}}))),
        fallback: false,
    }
    paths: ['']
}

export async function getStaticProps({params}){
    const slug = params.slug
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

const toDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(year, month - 1, day).toLocaleDateString(undefined, options)
  }

export default function BlogPost({post}){
    const pageTitle = HTMLReactParser(post.title).toString();
    return(<>
    <Head>
        <title>{pageTitle} | Ahmed Saad</title>
        <meta name="description" content={post.desciption} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={post.desciption} />
        <meta property="og:image" content={post.coverPhoto.url} />
        
      </Head>
        <div className='px-5 mx-auto overflow-x-hidden'>
            <NavBar/>
            {/*<img src={post.coverPhoto.url} alt={pageTitle} width={1920} height={1080} className='object-cover object-center w-full h-96'/>
              */}
            <div className='MAIN CONTENT flex flex-col items-start mx-auto justify-center  max-w-md md:max-w-4xl w-full mb-16'>
                <h1 className='text-3xl md: font-bold mt-5 md:mt-0 md:text-5xl'>{pageTitle}</h1>
                <p className='text-gray-500 py-3 dark:text-gray-300'>{toDate(post.publishedOn)}</p>
                <div
                    className="prose space-y-8 text-gray-500 leading-relaxed text-lg w-full md:max-w-4xl dark:text-gray-300"> 
                    <HTMLRenderer className="dark:text-gray-300" htmlContent={post.content.html} />
                </div>
                <div className='mt-12 w-full'><Footer/></div>
            </div>
            
        </div>
        </>
    )
}