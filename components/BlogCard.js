import Link from 'next/link'

export default function BlogCard({title, author, datePublished, slug, description}){
    return (
        <div>
                <Link href={'/posts/' + slug}>
                    <div id="post-card" className='bg-slate-100 rounded-lg w-4/5 p-3'>
                        <div id="title" className='text-2xl font-bold text-left p-1'>
                            {title}
                        </div>
                        <div id="desc" className='text-md text-gray-500 text-left text-color p-1'>
                            {description}
                        </div>
                    </div>
                
                
                </Link>
        
        </div>
    )
}