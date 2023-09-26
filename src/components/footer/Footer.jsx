import './footer.css';
import gitHub from '../../img/icons/gitHub.svg';
import linkedIn from '../../img/icons/linkedIn.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <ul className='social'>
            <li className='social__item'>
              <a
                href='https://github.com/NadeinMichael'
                target='_blank'
                rel='noreferrer'
              >
                <img src={gitHub} alt='Link github' />
              </a>
            </li>
            <li className='social__item'>
              <a
                href='https://www.linkedin.com/in/michael-nadein-0ab4b6267/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedIn} alt='Link linkedIn' />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p>© 2023 Nadein.dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
