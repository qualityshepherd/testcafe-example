import * as api from '../lib/apiModule';

fixture`API`;

test('should return last 10 posts', async (t) => {
  const response = await api.getPosts();

  await t.expect(await response.length).eql(10);
});

test.only('should search categories', async (t) => {
  const response = await api.searchForCategorie('Blather');

  await t.expect(await response.length).eql(1);
});