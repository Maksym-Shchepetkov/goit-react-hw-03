import s from './ContactForm.module.css';
import clsx from 'clsx';

const ContactForm = ({ hovered, onHover, openForm, onClick }) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className={s.svgLeafs}>
        <defs>
          <filter
            id="a"
            x="0"
            y="11.42"
            width="141.121"
            height="116.457"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="2" result="b" />
            <feFlood floodOpacity="0.102" />
            <feComposite operator="in" in2="b" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="c"
            x="21.622"
            y="0"
            width="133.642"
            height="128.93"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="5" result="d" />
            <feFlood floodOpacity="0.102" />
            <feComposite operator="in" in2="d" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="translate(-744.034 -593.436)" id="leafs">
          <path
            d="M863.5,421.5s8.259,5.707,15.234,25.935"
            transform="translate(156.156 66.187) rotate(16)"
            fill="none"
            stroke="#2f811e"
            strokeLinecap="round"
            strokeWidth="0.4"
          />
          <g transform="matrix(1, 0, 0, 1, 744.03, 593.44)" filter="url(#a)">
            <path
              d="M902.99,490.315s-43.333-18.667-50.49-50.667,10.49-31.667,10.49-31.667A314.915,314.915,0,0,1,895.5,411c16.5,2.5,69.5,37.5,81,70.5,3.829,10.989,7.49,22.815-7.176,29.815S902.99,490.315,902.99,490.315Z"
              transform="translate(-844.79 -390.56)"
              fill="var(--green-3)"
            />
          </g>
          <path
            d="M863.5,421.5s12.557,3.337,25.522,21.57"
            transform="translate(355.423 -110.67) rotate(32)"
            fill="none"
            stroke="#2c7f1c"
            strokeLinecap="round"
            strokeWidth="0.4"
          />
          <g transform="matrix(1, 0, 0, 1, 744.03, 593.44)" filter="url(#c)">
            <path
              d="M906.186,482.446A113.239,113.239,0,0,1,885.911,470c-5.977-4.556-11.973-10.782-16.832-16.173-12.146-13.478-10.038-42.395-5.407-45.119s27.019,5.924,27.019,5.924,30.8,14.016,39.021,25.114c16.177,21.847,23.864,43.4,14.867,49.079S908.19,483.261,906.186,482.446Z"
              transform="translate(-701.6 -564.26) rotate(12.09)"
              fill="var(--green-4)"
            />
          </g>
        </g>
      </svg>

      <div
        className={clsx(
          s.app,
          hovered && s.onBtnPTSecond,
          openForm ? s.secondScreenOpened : !hovered
        )}
      >
        <div className={s.leafs}>
          <div className={clsx(s.leaf, s.leaf1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="155.264"
              height="145.312"
              viewBox="0 0 155.264 145.312"
            >
              <use href="#leafs" />
            </svg>
          </div>

          <div className={clsx(s.leaf, s.leaf2)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="155.264"
              height="145.312"
              viewBox="0 0 155.264 145.312"
            >
              <use href="#leafs" />
            </svg>
          </div>

          <div className={clsx(s.leaf, s.leaf3)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="155.264"
              height="145.312"
              viewBox="0 0 155.264 145.312"
            >
              <use href="#leafs" />
            </svg>
          </div>
        </div>

        <div className={clsx(s.screen, s.firstScreen)}>
          <h1 className={s.heading}>Add contact</h1>
          <p className={s.description}>
            The planet needs care to save the trees using electronic notebooks.
          </p>
          <button
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
            onClick={() => onClick(true)}
            className={clsx(s.btnCircle, s.btnPTSecond)}
          >
            &rarr;
          </button>
        </div>

        <div className={clsx(s.screen, s.secondScreen)}>
          <button className={clsx(s.btnCircle, s.btnPTFirst)}>&larr;</button>

          <h1 className={s.heading}>Sign Up</h1>

          <form className={s.form}>
            <div className={s.formField}>
              <input
                type="email"
                className={s.formInput}
                placeholder="email"
                required
              />
            </div>

            <div className={s.formField}>
              <input
                type="password"
                className={s.formInput}
                placeholder="password"
                required
              />
            </div>

            <button className={clsx(s.btnWords, s.btnForm)}>
              Create Account
            </button>
            <div className={s.formSuccess}>Success</div>
          </form>

          <button className={clsx(s.btnWords, s.btnSignIn)}>Sign In</button>
        </div>

        <div className={clsx(s.screen, s.thirdScreen)}>
          <h1 className={s.heading}>Welcome</h1>
          <p className={s.description}>That's It. Thank You.</p>
        </div>
      </div>

      <div className={s.customCursor}></div>
    </div>
  );
};

export default ContactForm;
