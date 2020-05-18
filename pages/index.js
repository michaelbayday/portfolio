import Head from 'next/head';
import { FullPage, Slide } from 'react-full-page';
import Typed from 'react-typed';
import Carousel from 'react-material-ui-carousel';

import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

const pageKey = ['Home', 'Projects', 'Connect'];

const items = [
  {
    name: 'Nautilus',
    description: `Reaching Top 10 on HN and and featured on Google's Kubernetes podcast, Nautilus is a Docker Compose file charting visualizer available for Mac, Windows, and Linux.`,
    img: '/nautilus.png',
    url: 'https://nautilusdev.com/',
  },
  {
    name: 'Compost',
    description: `You've planned plenty of trips using Google docs, went through the process of delegating responsibilities for trip supplies, etc. Instead of working out a spreadsheet, plan your trip with Compost. Just generate a quick link to plan your trip and when you're done? Compost it.`,
    img: '/compost.png',
    url: 'https://compost.mdnh.io/',
  },
];

function Item(props) {
  return (
    <div className="item">
      <img src={props.item.img} />
      <a href={props.item.url}>
        <h2>{props.item.name}</h2>
      </a>
      <p style={{ height: '30px' }}>{props.item.description}</p>
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
      <div className="slides" style={{ width: '80vw' }}>
        <FullPage controls={Controls}>
          <Slide className="homeSlide">
            <div className="introsection">
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
              <div className="social">
                <GitHubIcon className="github" />
              </div>
            </div>
            <img src="/me.jpg" />
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
        </FullPage>
      </div>
    </div>
  );
}
