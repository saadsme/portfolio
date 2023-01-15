import Link from 'next/link'

export default function BlogCard({title, author, publishedOn, slug, description}){
    //TODO: parse the date and turn it into the following format: January 6th, 2023
    const toDate = (dateStr) => {
        const [year, month, day] = dateStr.split("-")
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(year, month - 1, day).toLocaleDateString(undefined, options)
      }
    return (
        <div>
                <Link href={'/posts/' + slug}>
                    <div id="post-card" className='bg-slate-100 rounded-lg max-w-3xl w-3xl p-4 md:max-w-3xl'>
                        <div id="title" className='text-2xl font-bold text-left p-1'>
                            {title}
                        </div>
                        <div id="publish" className='text-md text-gray-500 text-color p-1'>
                            {toDate(publishedOn)}
                        </div>
                        <div id="desc" className='text-md text-gray-500 text-left text-color p-1'>
                            {description}
                        </div>
                    </div>
                </Link>
        
        </div>
    )
}