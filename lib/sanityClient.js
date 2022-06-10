import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'nrtkllcl',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'sk4DDpM2LcgWipL4bJ62rHfhfdYsSo2XcqMuri3YoJYhluC6LdC4FfD9kTsi0Iqe85WznAoKgWcUqGn1RAmrTRh7fFUyWsOdON9oWcTWpeugAuR5SzVjJANaltXJaC4S8fNFOa3fpmydOyBUFueUBOpulYb1FV4zZ6QOHbW9eY8o0QpAfkSC',
  useCdn: false,
})
