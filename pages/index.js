import Head from 'next/head';
import { FullPage, Slide } from 'react-full-page';
import Typed from 'react-typed';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const pageKey = ['Home', 'Projects', 'Connect'];

const items = [
  {
    name: 'Nautilus',
    description: `Reaching Top 10 on HN and and featured on Google's Kubernetes podcast, Nautilus is a Docker Compose file charting visualizer available for Mac, Windows, and Linux.`,
    img: '',
    url: 'https://nautilusdev.com/',
  },
];

function Item(props) {
  console.log(props);
  return (
    <div className="item">
      <a href={props.item.url}>
        <h3>{props.item.name}</h3>
      </a>
      <p>{props.item.description}</p>
    </div>
  );
}

export default function Home({ setLight, light }) {
  const Controls = (props) => {
    const titles = [];
    for (let i = 0; i < props.slidesCount; i++) {
      const status = i === props.getCurrentSlideIndex() ? 'active' : 'inactive';
      titles.push(
        <div
          className={`title title-${status}`}
          onClick={() => {
            props.scrollToSlide(i);
            setSlide(i);
          }}
        >
          {pageKey[i]}
        </div>
      );
    }
    return <div className="control">{titles}</div>;
  };
  return (
    <div className="container">
      <Head>
        <title>Michael Dinh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EmojiObjectsOutlinedIcon
        className="themeToggle"
        onClick={() => {
          setLight(!light);
        }}
      />
      <FullPage controls={Controls}>
        <Slide className="homeSlide">
          <Typed
            strings={["Hi, I'm Michael"]}
            className="intro"
            typeSpeed={60}
            showCursor={false}
          />
          <h3>
            A full stack engineer always excited to talk about the latest
            technologies, music and dad shoes.
          </h3>
        </Slide>
        <Slide className="projectsSlide">
          <Typed
            strings={['Projects']}
            className="projects"
            typeSpeed={60}
            showCursor={false}
          />
          <Carousel className="carousel">
            {items.map((item) => (
              <Item item={item} />
            ))}
          </Carousel>
        </Slide>
        <Slide className="connectSlide">
          <Typed
            strings={["Let's Connect"]}
            className="intro"
            typeSpeed={60}
            showCursor={false}
          />
        </Slide>
      </FullPage>
    </div>
  );
}
