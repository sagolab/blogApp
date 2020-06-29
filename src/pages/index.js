import NextLink from 'next/link'
import { Flex, Grid, Heading, Link, Text, Stack } from '@chakra-ui/core'

// --- Components
import { BlogPost, MusicCard, Layout } from 'components'

// --- Articles
import { frontMatter as phoneSetup } from './blog/phone-setup.mdx'
import { frontMatter as useFetch } from './blog/useFetch-react-hook.mdx'
import { frontMatter as html5Video } from './blog/html5-video.mdx'
import { frontMatter as reactMemo } from './blog/understanding-react-memo.mdx'

const popularMixtapes = [
  {
    title: 'Summer Sax',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://www.youtube.com/watch?v=bzZupZkrjm0',
    imageUrl: 'https://i1.sndcdn.com/artworks-000145200920-plq49s-t500x500.jpg',
    playCount: '9.4M',
    likeCount: '46K'
  },
  {
    title: 'Sax On Fire',
    description: 'Melodic Saxophone Deep House Summer Mix',
    url: 'https://soundcloud.com/jagerman/saxonfire',
    imageUrl: 'https://i1.sndcdn.com/artworks-000145200947-x75uby-t500x500.jpg',
    playCount: '1.36M',
    likeCount: '33.6K'
  },
  {
    title: 'Casablanca',
    description: 'Soulful Deep House Mix',
    url: 'https://soundcloud.com/jagerman/casablanca',
    imageUrl: 'https://i1.sndcdn.com/artworks-000145201020-72yys4-t500x500.jpg',
    playCount: '113K',
    likeCount: '2.8K'
  }
]

const Home = () => (
  <Layout>
    <Stack spacing={12}>
      <Stack spacing={6}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="medium" letterSpacing={-1}>
          {'Hey, I’m Onur Şuyalçınkaya'}
        </Heading>
        <Text>{`I’m a Software Engineer, Writer, and DJ currently living in Istanbul, Turkey. I develop things on yemek.com at Yemeksepeti.`}</Text>
      </Stack>
      <Stack spacing={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-1}>
            Latest Posts
          </Heading>
          <NextLink href="/blog">
            <a>
              <Text>See All ⟶</Text>
            </a>
          </NextLink>
        </Flex>
        <Grid gridGap={8}>
          <BlogPost {...phoneSetup} />
          <BlogPost {...useFetch} />
          <BlogPost {...reactMemo} />
          <BlogPost {...html5Video} />
        </Grid>
      </Stack>
      <Stack spacing={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" letterSpacing={-1}>
            Popular Mixtapes
          </Heading>
          <Link rel="noopener noreferrer" href="https://soundcloud.com/jagerman" isExternal>
            <Text>See All ⟶</Text>
          </Link>
        </Flex>
        <Grid gridGap={8}>
          {popularMixtapes.map((mixtape, mixtapeId) => (
            <MusicCard key={`mixtape_${mixtapeId}`} {...mixtape} />
          ))}
        </Grid>
      </Stack>
    </Stack>
  </Layout>
)

export default Home
