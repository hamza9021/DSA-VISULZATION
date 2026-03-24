import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const readSource = async (filePath) => readFile(new URL(`../${filePath}`, import.meta.url), 'utf8');

test('App router defines core data structure routes', async () => {
  const appSource = await readSource('src/App.jsx');

  const expectedRoutes = [
    'path: "/"',
    'path: "/array"',
    'path: "/array/sort/bubble"',
    'path: "/array/sort/selection"',
    'path: "/array/sort/insertion"',
    'path: "/array/sort/quick"',
    'path: "/array/search/linear"',
    'path: "/array/search/binary"',
    'path: "/linkedlist"',
    'path: "/queue"',
    'path: "/stack"',
    'path: "/tree"',
  ];

  for (const route of expectedRoutes) {
    assert.ok(appSource.includes(route), `Expected route to exist: ${route}`);
  }
});

test('Home screen includes primary section headings', async () => {
  const homeSource = await readSource('src/Components/Home.jsx');

  const expectedHeadings = [
    'Data Structures & Algorithm Visualization',
    'Linear Data Structures',
    'Non-Linear Data Structures',
    'About Me',
    'Connect with Me',
  ];

  for (const heading of expectedHeadings) {
    assert.ok(homeSource.includes(heading), `Expected heading to exist: ${heading}`);
  }
});

test('Home screen includes internal navigation links', async () => {
  const homeSource = await readSource('src/Components/Home.jsx');

  const internalLinks = [
    'to="/array"',
    'to="/linkedlist"',
    'to="/stack"',
    'to="/queue"',
    'to="/tree"',
    'to="/graph"',
  ];

  for (const link of internalLinks) {
    assert.ok(homeSource.includes(link), `Expected internal link to exist: ${link}`);
  }
});
