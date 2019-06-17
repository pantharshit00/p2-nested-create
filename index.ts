import Photon from '@generated/photon'

const photon = new Photon({
  debug: true,
})

async function main() {
  await photon.connect()

  const testData = await photon.users.create({
    data: {
      username: 'posts',
      posts: {
        create: {
          data: 'test',
        },
      },
    },
  })

  console.log(testData)
}

main()
  .then(async _ => {
    await photon.disconnect()
  })
  .catch(async e => {
    console.error(e)
    await photon.disconnect()
  })
  .finally(async () => {
    await photon.disconnect()
  })
