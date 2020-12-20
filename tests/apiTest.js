import * as api from '../lib/apiModule'

fixture`API`

test('should return n random facts', async t => {
  const response = await api.getRandomFact(2)

  await t.expect(await response.length).eql(2)
})

test('should get cat by id', async t => {
  const id = '5de780600013130015a3ccaf'
  const response = await api.getCatById(id)

  await t.
    expect(await response._id).eql(id)
})