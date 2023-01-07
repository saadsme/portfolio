import {GraphQLClient, gql} from 'graphql-request'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const graphcms = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/clckiz8mj1fr101ukd1cqfzkm/master");

const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}){
            id, title, slug, publishedOn, 
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

export default function BlogPost({post}){
    return(
        <div>
            <NavBar/>
            <div className='MAIN CONTENT flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16'>
                <h1 className='text-4xl font-bold mx-8 mt-5 md:mt-0 md:text-5xl'>{post.title}</h1>
                <p className='text-gray-500 py-3 mx-8'>{post.publishedOn}</p> {/* PARSE THIS INTO NICE "January 6th, 2022" */}
                <div className='POSTCONTENT mx-8 space-y-8 text-gray-500 leading-relaxed text-lg' 
                    dangerouslySetInnerHTML={{__html: post.content.html}}
                ></div>
                <div className='mt-12 w-full'><Footer/></div>
            </div>
            
        </div>

    )
}