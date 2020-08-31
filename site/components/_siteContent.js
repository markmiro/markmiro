// Underscore in the filename does not make this a Next.js file
// Using the naming convention for my own purposes

// NOTE: using "children" name because I'm ok with JSX being there

const content = {
  siteName: 'Mark Miro',
  jobTitle: 'UI Engineer',
  navLinks: [
    // { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/projects', children: 'Projects' },
    { href: '/experiments', children: 'Experiments' },
    // { href: '/posts', children: 'Posts' },
  ],
  socialLinks: [
    { href: 'https://codesandbox.io/u/markmiro', children: 'CodeSandBox' },
    { href: 'https://codepen.io/markmiro', children: 'CodePen' },
    { href: 'https://github.com/markmiro', children: 'GitHub' },
    { href: 'https://twitter.com/markmiro', children: 'Twitter' },
  ],
  projects: [
    {
      href: 'https://markmiro.github.io/huet',
      heading: 'Huet',
      slug: 'project-huet',
      children:
        'Library for having the computer pick your exact hex color codes so you can say "I want this to be red" and have it look good (accesible).',
    },
    {
      href: 'https://markmiro.github.io/jpeg-text-degrader',
      heading: 'JPEG Text Degrader',
      slug: 'project-jpeg-text-degrader',
      children:
        "What if you take a JPEG image and then compress it again and again and again and you get to watch it as it happens. Maybe it'll look like one of those timelapses of decaying fruit. That could be something, right?",
    },
    // {
    //   href: '',
    //   heading: 'Validated',
    //   slug: '',
    //   children:
    //     'An opinionated validation library that takes care of your UX. This means the library decides when error messages are shown, so you only have to worry about about validation rules.',
    // },
    // {
    //   href: '',
    //   heading: 'Mosaic Browser',
    //   slug: '',
    //   children:
    //     'Exploration of what a web browser could be. Completely transform the tab UI. A reinvention of the browser UI made for work.',
    // },
  ],
  experiments: [
    {
      href: 'https://codepen.io/markmiro/pen/wbqMPa',
      heading: '3D Card',
      slug: '3d-card',
    },
    {
      href: 'https://codepen.io/markmiro/pen/RYOgQK',
      heading: 'Marquee',
      slug: 'marquee',
    },
    {
      href: 'https://codesandbox.io/s/987kj26rzw',
      heading: 'React-like API in 70 lines',
      slug: 'react-like-api-in-70-lines',
    },
    {
      href: 'https://codepen.io/markmiro/full/mwKMvZ',
      heading: 'Fireworks',
      slug: 'fireworks',
    },
    {
      href: 'https://codesandbox.io/s/yw6vxn7q1v',
      heading: 'Parameterized UI Contrast',
      slug: 'parameterized-ui-contrast',
    },
    {
      href: 'https://codesandbox.io/s/7ywkjkqj96',
      heading: 'Split View',
      slug: 'split-view',
    },
    {
      href: 'https://codepen.io/markmiro/pen/RYLbZx',
      heading: 'Tooltip',
      slug: 'tooltip',
    },
    {
      href: 'https://codepen.io/markmiro/pen/YOaoYp',
      heading: 'Minesweeper',
      slug: 'minesweeper',
    },
    {
      href:
        'https://codesandbox.io/s/react-tree-reducer-example-redux-60r3p?file=/src/App.js',
      heading: 'Performant Tree',
      slug: 'performant-tree',
    },
    {
      href: 'https://codepen.io/markmiro/pen/gdEJZr',
      heading: 'Brutalist Toggle',
      slug: 'brutalist-toggle',
    },
    {
      href: 'https://codepen.io/markmiro/pen/ZmEbeo',
      heading: 'Fixed content in scrollable window',
      slug: 'fixed-content-in-scrollable-window',
    },
  ],
}

export default content
