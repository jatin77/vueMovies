import React from 'react';
import { Link } from 'react-router-dom';
import Landing from '../../components/landing/Landing';
import Countdown from '../../components/countdown/Countdown';
import Facts from '../../components/facts/Facts';
import Footer from '../../components/footer/Footer';
import newsImg1 from '../../style/images/charlies.jpg';
import newsImg2 from '../../style/images/celeb.jpg';
import tourImg from '../../style/images/album-black-classic-167092_burned.png';
const About = () => {
  return (
    <React.Fragment>
      <Landing />
      <Countdown />

      <div className='about-tour'>
        <div className='about-tour-content'>
          <div className='content-header '>
            <h1>Know what you love</h1>
            <p>
              get cool stuff like your own movie charts, new movie
              recommendations, and a big ol’ community of other movie lovers.
            </p>
          </div>
          <div className='content-list'>
            <div className='history-tl-container'>
              <ul className='tl'>
                <li className='tl-item' ng-repeat='item in retailer_history'>
                  <div className='item-title'>Explore Your Watching</div>
                  <div className='item-detail'>
                    you can discover things you never knew about your watching
                    habits
                  </div>
                </li>
                <li className='tl-item' ng-repeat='item in retailer_history'>
                  <div className='item-title'>Discover New Movies</div>
                  <div className='item-detail'>
                    We make discovery easy by recommending things{' '}
                  </div>
                </li>
                <li className='tl-item' ng-repeat='item in retailer_history'>
                  <div className='item-title'>Meet Your movie Soulmates</div>
                  <div className='item-detail'>
                    Movie’s a lot more fun when you’re sharing it with someone.{' '}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='about-tour-img'>
          <img src={tourImg} alt='' />
        </div>
      </div>
      <Facts />
      <div className='about'>
        <div className='about-content '>
          <h1>About Vue</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa,
            odio tempore hic eveniet aut unde qui blanditiis fugiat, a incidunt
            natus quia. Maxime odit magni voluptas debitis vero at alias
            delectus temporibus sed? Aliquam, esse. Reprehenderit, blanditiis
            commodi consequatur veritatis ea, ipsa tempore corporis voluptates
            quam deleniti laboriosam ab.
          </p>
          <button>
            <Link to='/' className='about-content-link'>
              <p>Home</p>
            </Link>
          </button>
        </div>
      </div>
      <div className='about-news container'>
        <h1>Latest News</h1>
        <div className='news-box'>
          <div className='news-box-img'>
            <img src={newsImg1} alt='' />
          </div>
          <div className='news-box-content'>
            <p>
              <span>Creative</span> | By Ben Travis
            </p>
            <p>Charlie’s Angels Trailer: Meet The New Angels</p>
            <p>
              <small>
                It’s 19 years since Cameron Diaz, Drew Barrymore and Lucy Liu
                teamed up as a super-spy trio in McG’s big-screen Charlie’s
                Angels – a film that gave us post-Spice Girls feminist action,
                Mission: Impossible-inspired mask reveals, and an all-time great
                Destiny’s Child power anthem.
              </small>
            </p>
            <button>
              <a
                href='https://www.empireonline.com/movies/news/charlie-s-angels-trailer-meet-the-new-angels/'
                target='_blank'
                rel='noopener noreferrer'
              >
                READ MORE
              </a>
            </button>
          </div>
        </div>
        <div className='news-box'>
          <div className='news-box-content'>
            <p>
              <span>Creative</span> | By James White
            </p>
            <p>Lena Headey Heads For The Dark Crystal: Age Of Resistance</p>
            <p>
              <small>
                She might have seen her ambitious plans crushed on Game Of
                Thrones, but Lena Headey isn't letting that stop her. She's part
                of the voice cast for the Jim Henson Company's incoming Dark
                Crystal prequel TV series, Age Of Resistance.
              </small>
            </p>
            <button>
              <a
                href='https://www.billboard.com/articles/news/awards/8509655/billboard-music-awards-2019-winners-list'
                target='_blank'
                rel='noopener noreferrer'
              >
                READ MORE
              </a>
            </button>
          </div>
          <div className='news-box-img'>
            <img src={newsImg2} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
