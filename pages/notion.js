import Head from 'next/head'

export default function NotionEmbed() {
  return (
    <>
      <Head>
        <title>Profile Stats</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white">
        <div className="w-full max-w-sm p-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-gray-600 text-lg">Instagram</span>
            <span className="font-bold text-5xl text-gray-900">12.5K</span>
            <span className="text-gray-600">followers</span>
          </div>
          
          <div className="mt-4 text-sm text-center text-gray-500">
            @saads.me
          </div>
        </div>
      </div>
    </>
  )
}