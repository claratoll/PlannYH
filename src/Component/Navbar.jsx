function Navbar({ title }) {
  return (
    <nav className='navbar'>
      <section className='navbar_title'>
        <h3>{title}</h3>
      </section>
      <section className='navbar_logo'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlns:xlink='http://www.w3.org/1999/xlink'
          width='50'
          zoomAndPan='magnify'
          viewBox='0 0 37.5 37.499999'
          height='50'
          preserveAspectRatio='xMidYMid meet'
          version='1.0'
        >
          <defs>
            <g />
            <clipPath id='d078fa4dd6'>
              <path
                d='M 4.265625 1.894531 L 33.234375 1.894531 L 33.234375 35.605469 L 4.265625 35.605469 Z M 4.265625 1.894531 '
                clip-rule='nonzero'
              />
            </clipPath>
            <clipPath id='bbd55f1851'>
              <path
                d='M 18.75 1.894531 L 33.234375 10.320312 L 33.234375 27.179688 L 18.75 35.605469 L 4.265625 27.179688 L 4.265625 10.320312 Z M 18.75 1.894531 '
                clip-rule='nonzero'
              />
            </clipPath>
            <clipPath id='f08e14624b'>
              <path
                d='M 8.980469 7.378906 L 28.519531 7.378906 L 28.519531 30.121094 L 8.980469 30.121094 Z M 8.980469 7.378906 '
                clip-rule='nonzero'
              />
            </clipPath>
            <clipPath id='11a9dbc9c9'>
              <path
                d='M 18.75 7.378906 L 28.519531 13.066406 L 28.519531 24.433594 L 18.75 30.121094 L 8.980469 24.433594 L 8.980469 13.066406 Z M 18.75 7.378906 '
                clip-rule='nonzero'
              />
            </clipPath>
          </defs>
          <g clip-path='url(#d078fa4dd6)'>
            <g clip-path='url(#bbd55f1851)'>
              <path
                fill='#8f2d56'
                d='M 4.265625 1.894531 L 33.234375 1.894531 L 33.234375 35.605469 L 4.265625 35.605469 Z M 4.265625 1.894531 '
                fill-opacity='1'
                fill-rule='nonzero'
              />
            </g>
          </g>
          <g clip-path='url(#f08e14624b)'>
            <g clip-path='url(#11a9dbc9c9)'>
              <path
                fill='#e7eae9'
                d='M 8.980469 7.378906 L 28.519531 7.378906 L 28.519531 30.121094 L 8.980469 30.121094 Z M 8.980469 7.378906 '
                fill-opacity='1'
                fill-rule='nonzero'
              />
            </g>
          </g>
          <g fill='#8eafb8' fill-opacity='1'>
            <g transform='translate(12.178851, 29.782766)'>
              <g>
                <path d='M 1.515625 -14.109375 L 6.84375 -14.109375 C 7.675781 -14.109375 8.394531 -14.066406 9 -13.984375 C 9.613281 -13.898438 10.179688 -13.679688 10.703125 -13.328125 C 11.222656 -12.984375 11.613281 -12.507812 11.875 -11.90625 C 12.144531 -11.300781 12.28125 -10.675781 12.28125 -10.03125 C 12.28125 -8.726562 11.859375 -7.679688 11.015625 -6.890625 C 10.179688 -6.109375 8.84375 -5.71875 7 -5.71875 L 3.390625 -5.71875 L 3.390625 0 L 1.515625 0 Z M 3.390625 -7.390625 L 7.015625 -7.390625 C 9.234375 -7.390625 10.34375 -8.25 10.34375 -9.96875 C 10.34375 -10.53125 10.195312 -11.023438 9.90625 -11.453125 C 9.613281 -11.890625 9.257812 -12.160156 8.84375 -12.265625 C 8.425781 -12.378906 7.800781 -12.4375 6.96875 -12.4375 L 3.390625 -12.4375 Z M 3.390625 -7.390625 ' />
              </g>
            </g>
          </g>
        </svg>
        <h1>PlannYH</h1>
      </section>
      <section className='navbar_views'>
        <a href=''>Views</a>
      </section>
    </nav>
  );
}

export default Navbar;
