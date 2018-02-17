webpackJsonp([3],{486:function(e,n){e.exports="Factories\n=========\n\nComponents produced by MDXC can be configured to render custom components instead of standard HTML elements. This allows for tighter integration between your document components and React. For example:\n\n- You add `#` anchors to your titles\n- You could replace your code blocks with live examples\n- You can replace `<a>` tags with react-router `<Link>` elements\n\nTo configure how HTML elements should be rendered, you pass factory functions to the special `factories` prop of your document components. For example, you could confuse your users by reversing how your headings are rendered:\n\n\n\n\n\n\n```jsx\n<Document\n  factories={{\n    h1: (props, children) => React.createFactory('h6'),\n    h2: (props, children) => React.createFactory('h5'),\n    h3: (props, children) => React.createFactory('h4'),\n    h4: (props, children) => React.createFactory('h3'),\n    h5: (props, children) => React.createFactory('h2'),\n    h6: (props, children) => React.createFactory('h1'),\n  }}\n/>\n```\n\n\n\n\n\nFactory functions are expected to take two arguments (`props` and `children`), and return a React element -- just like the functions returned by [React.createFactory](https://facebook.github.io/react/docs/react-api.html#createfactory).\n\nEach available key of the `factories` object corresponds to a HTML tag, with one exception --- `codeBlock` corresponds to a fenced block of code, and by default is rendered with `<pre><code>`.\n\n\n\nHeading anchors\n---------------\n\nThe MDXC website uses `h1`, `h2` and `h3` factories to add `#` anchors to titles. Hover over one of the titles to try it out.\n\n```jsx\nfunction headingFactory(type, props, ...children) {\n  // Render the same props and children that were passed in, but prepend a\n  // link to this title with the text '#'.\n  return React.createElement(\n    type,\n    props,\n    <a href={'#'+props.id}>#</a>,\n    ...children\n  )\n}\n\n<Document\n  factories={{\n    h1: (props, children) => headingFactory('h1', props, children),\n    h2: (props, children) => headingFactory('h2', props, children),\n    h3: (props, children) => headingFactory('h3', props, children),\n  }}\n/>\n```\n\n\n\n\n\n\nLive examples\n-------------\n\nThe `mdx-breadboard` package uses a `codeBlock` factory to provide live examples for code blocks fenced with the `mdx` language.\n\n```jsx\n<Document\n  factories={{\n    codeBlock: (props, children) => {\n      const language = props.className.replace(/^language-/, '')\n      if (language.slice(0, 3) === 'mdx') {\n        return <MDXBreadboard defaultSource={children} />\n      }\n      else {\n        return <pre {...props}><code dangerouslySetInnerHTML={{ __html: children }} /</pre>\n      }\n    }\n  }}\n/>\n```\n\nThe MDXC website website uses `mdx-breadboard`, so you can use it test out MDX!\n\n```mdx\n*So this will render a live MDX code example*\n```\n\n\n\n\n\nHTML5 History Links\n-------------------\n\nNavigation libraries like [react-router](https://reacttraining.com/react-router/web/api/Link) and [junctions](https://junctions.js.org/api/react-junctions/Link) often provide a Link component that supports `pushState`. To tell your document component to use this instead of a standard `<a>` tag, you can specify the `a` factory. Make sure to pass `<Link>` a `to` prop instead of a `href` prop.\n\n```jsx\nimport { Link } from 'react-router'\n\n<Document\n  factories={{\n    a: ({ href, ...other }, ...children) =>\n      React.createElement(Link, {\n        to: href,\n        ...other\n      }, ...children)\n  }}\n/>\n```\n"}});
//# sourceMappingURL=3.2e97186d.chunk.js.map