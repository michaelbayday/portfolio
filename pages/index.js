import Head from 'next/head';
import { FullPage, Slide } from 'react-full-page';
import Typed from 'react-typed';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = {
  palette: {
    type: 'dark',
  },
};

const pageKey = ['Home', 'Projects', 'Connect'];

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

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>Michael Dinh</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <FullPage controls={Controls}>
          <Slide className="home">
            <Typed
              strings={["Hi, I'm Michael"]}
              className="intro"
              typeSpeed={60}
              showCursor={false}
            />
            <h3>
              Hi, I'm Michael Dinh. A full stack engineer always excited to talk
              about the latest technologies, music and dad shoes.
            </h3>
          </Slide>
          <Slide className="projects">
            <Typed
              strings={['Projects']}
              className="intro"
              typeSpeed={60}
              showCursor={false}
            />
          </Slide>
          <Slide className="connect">
            <Typed
              strings={["Let's Connect"]}
              className="intro"
              typeSpeed={60}
              showCursor={false}
            />
          </Slide>
        </FullPage>
      </div>
    </ThemeProvider>
  );
}
