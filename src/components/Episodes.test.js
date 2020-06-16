import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

const episodesData = [
  {
    id: 1576472,
    url:
      'http://www.tvmaze.com/episodes/1576472/stranger-things-3x04-chapter-four-the-sauna-test',
    name: 'Chapter Four: The Sauna Test',
    season: 3,
    number: 4,
    airdate: '2019-07-04',
    airtime: '',
    airstamp: '2019-07-04T12:00:00+00:00',
    runtime: 53,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/204/511312.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/204/511312.jpg',
    },
    summary:
      "<p>Mike, Lucas, and Will recruit El and Max to help them learn who the Mind Flayer's host is. Robin, Steve, and Dustin recruit someone to sneak into Lynx, and Nancy and Jonathan are fired.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1576472',
      },
    },
  },
  {
    id: 1576473,
    url:
      'http://www.tvmaze.com/episodes/1576473/stranger-things-3x05-chapter-five-the-flayed',
    name: 'Chapter Five: The Flayed',
    season: 3,
    number: 5,
    airdate: '2019-07-04',
    airtime: '',
    airstamp: '2019-07-04T12:00:00+00:00',
    runtime: 52,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/204/510102.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/204/510102.jpg',
    },
    summary:
      "<p>The Scoop Group explore the tunnels beneath Starcourt, while Nancy and Jonathan recruit Mike and the others to help them discover what happen to the Holloways and find the Mind Flayer's base of operations.</p>",
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1576473',
      },
    },
  },
  {
    id: 1576474,
    url:
      'http://www.tvmaze.com/episodes/1576474/stranger-things-3x06-chapter-six-e-pluribus-unum',
    name: 'Chapter Six: E Pluribus Unum',
    season: 3,
    number: 6,
    airdate: '2019-07-04',
    airtime: '',
    airstamp: '2019-07-04T12:00:00+00:00',
    runtime: 60,
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_landscape/204/511681.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/204/511681.jpg',
    },
    summary:
      '<p>Dr. Alexei reveals what the Russians have been building, and Eleven sees where Billy has been. Dustin and Erica stage a daring rescue.</p>',
    _links: {
      self: {
        href: 'http://api.tvmaze.com/episodes/1576474',
      },
    },
  },
];

test('re-renders correctly with the episode information', () => {
  // arrange, act, assert
  const { rerender, getAllByTestId } = render(<Episodes episodes={[]} />);
  rerender(<Episodes episodes={episodesData} />);
  const episodeList = getAllByTestId(/episode/i);
  expect(episodeList).toHaveLength(3);
});
