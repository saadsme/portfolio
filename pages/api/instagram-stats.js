export default async function handler(req, res) {
  try {
    const INSTAGRAM_ID = process.env.INSTAGRAM_ACCOUNT_ID
    const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN

    const response = await fetch(
      `https://graph.instagram.com/v12.0/${INSTAGRAM_ID}?fields=followers_count&access_token=${ACCESS_TOKEN}`
    )
    
    const data = await response.json()
    
    res.status(200).json({ 
      followerCount: new Intl.NumberFormat('en-US', { 
        notation: 'compact',
        maximumFractionDigits: 1 
      }).format(data.followers_count)
    })
  } catch (error) {
    console.error('Instagram API Error:', error)
    res.status(500).json({ error: 'Failed to fetch follower count' })
  }
}