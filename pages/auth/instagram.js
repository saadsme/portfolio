import Head from 'next/head'

export default function InstagramAuth() {
  const INSTAGRAM_CLIENT_ID = process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI

  const handleLogin = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile&response_type=code`
    window.location.href = authUrl
  }

  return (
    <>
      <Head>
        <title>Connect Instagram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#191919]">
        <div className="max-w-md w-full p-6 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Connect Your Instagram</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We'll only access your public profile information
            </p>
          </div>
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Connect with Instagram
          </button>
        </div>
      </div>
    </>
  )
}