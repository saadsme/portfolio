import Head from 'next/head'

export default function NotionEmbed() {
  return (
    <>
      <Head>
        <title>Profile Stats</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen w-full bg-white dark:bg-[#191919] dark:text-white">
        <div className="w-full max-w-sm p-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="text-gray-600 dark:text-gray-400 text-lg">Instagram</span>
            <span className="font-bold text-5xl text-gray-900 dark:text-white">12.5K</span>
            <span className="text-gray-600 dark:text-gray-400">followers</span>
          </div>
          
          <div className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
            @saads.me
          </div>
        </div>
      </div>
    </>
  )
}