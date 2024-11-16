const settings = {
  now: new Date(),
  website: 'https://awsbites.com',
  description: 'AWS Bites podcast is where we share our experience with AWS and the cloud, we discuss what\'s new and share our opinions. Brought to you by Eoin Shanaghy and Luciano Mammino',
  rss_link: 'https://anchor.fm/s/6a3312a0/podcast/rss',
  analytics_id: 'G-LZHZ86B8SZ',
  links: [
    { name: 'YouTube', href: 'https://youtube.com/AWSBites' },
    { name: 'Anchor.fm', href: 'https://anchor.fm/aws-bites' },
    { name: 'Spotify', href: 'https://open.spotify.com/show/3Lh7PzqBFV6yt5WsTAmO5q' },
    { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/us/podcast/aws-bites/id1585489017' },
    { name: 'Google Podcasts', href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82YTMzMTJhMC9wb2RjYXN0L3Jzcw==' },
    { name: 'Castbox', href: 'https://castbox.fm/channel/AWS-Bites-id4553992' },
    { name: 'Overcast', href: 'https://overcast.fm/itunes1585489017/' },
    { name: 'Pocket Casts', href: 'https://pca.st/wgu0m6rr' },
    { name: 'Amazon Podcasts', href: 'https://music.amazon.com/podcasts/5c10087d-658a-48c1-a9da-ddc8503d4edc/aws-bites' }
  ],
  orama_endpoint: 'https://cloud.orama.run/v1/indexes/awsbites-com-z8toay',
  orama_apikey: '3WtQUfQf2FIuuz6HL9lPRzki906uShZQ'
}

settings.links_by_name = settings.links.reduce((acc, curr) => {
  acc[curr.name] = curr
  return acc
}, {})

module.exports = settings
