// https://pmarsceill.github.io/just-the-docs/docs/index-test

import { css } from '@emotion/core'

const HtmlKitchenSink = () => (
  <>
    {/* Text from https://medium.com/eightshapes-llc/typography-in-design-systems-6ed771432f1e */}
    <h1>
      Typography in Design Systems
      <br />
      <small>
        Choose Fonts, Set a Hierarchy, and Integrate with Components
      </small>
    </h1>

    <p>
      Everyday digital interfaces include a rich variety of images,
      visualizations, and other pictures.{' '}
      <a href="http://example.com">
        However, more than anything else, they are made of words. Oh so many
        words
      </a>
      . As we equip teams to design and code usable, consistent, beautiful
      interfaces using systems, it’s essential that words depend on a strong
      foundation of typography.
    </p>
    <p>
      I’ll admit, I am not a <code>typography</code> expert. I lack a graphic
      design degree. I’m never the person choosing a font, scaling type, or
      finessing letter spacing. As a result, I’ve always been reluctant to write
      about typography.
    </p>
    <p>
      On the other hand, I am a pattern hunter. Over the years, I’ve contributed
      to many design systems that set a foundation for{' '}
      <a href="http://example.com">typography</a>. Each traversed of steps and
      decisions to set a foundation and apply it to an emerging library of
      interface components. This article summarizes those patterns.
    </p>
    <p>
      Typography starts by setting a foundation of font families and weights
      along with fallbacks. It then explores how to build hierarchy using size,
      color, additional details like line-height, and layering responsiveness.
      Those models are then applied to components in a system’s library (like
      Article and Header) as well as custom components made by other teams.
    </p>
    <h2>Fonts</h2>
    <p>
      Before you dig into details, you have to settle on basics: font(s).
      Through exploration, comparison, research, and often — for large companies
      — making a font themselves, every display cascades from and depends on
      this choice.
    </p>
    <h3>
      Families, <a href="http://example.com">Weights</a>, and Fallbacks
    </h3>
    <p>
      While systems can vary fonts based on theming, most ground themselves
      initially by identifying primary serif and/or sans-serif font family. Each
      font is augmented with a cascade of fallbacks (Hello, Arial and Times),
      and many systems throw in a monospace font for code displays (even if only
      their own).
    </p>

    <hr />

    <p>
      Text can be <strong>bold</strong>, <em>italic</em>,{' '}
      <mark>Highlighted / marked</mark> or <del>strikethrough</del>.
    </p>
    <p>
      <ins>Insert</ins>
    </p>
    <p>
      <address>
        One Apple Park Way
        <br />
        Cupertino, CA 95014
        <br />
        (408) 996–1010
      </address>
    </p>
    {/* <p>
      If you want to <sub>subscript</sub> or <sup>superscript</sup> text, use{' '}
      <code>&lt;sub&gt;</code> or <code>&lt;sup&gt;</code>.
    </p> */}
    <p>
      <a href="another-page">Link to another page</a>.
    </p>
    <p>There should be whitespace between paragraphs.</p>
    <p>
      There should be whitespace between paragraphs. We recommend including a
      README, or a file with information about your project.
    </p>
    <h1>Header 1</h1>
    <p>
      This is a normal paragraph following a header. GitHub is a code hosting
      platform for version control and collaboration. It lets you and others
      work together on projects from anywhere.
    </p>
    <h2>Header 2</h2>
    <blockquote>
      <p>This is a blockquote following a header.</p>
      <p>
        When something is important enough, you do it even if the odds are not
        in your favor.
      </p>
    </blockquote>
    <h3>Header 3</h3>
    <pre>
      <code>
        {`// Javascript code
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}`}
      </code>
    </pre>
    <pre>
      <code>
        {`// Javascript code
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}`}
      </code>
    </pre>
    <h4>Header 4</h4>
    <ul>
      <li>This is an unordered list following a header.</li>
      <li>This is an unordered list following a header.</li>
      <li>This is an unordered list following a header.</li>
    </ul>
    <h5>Header 5</h5>
    <ol>
      <li>This is an ordered list following a header.</li>
      <li>This is an ordered list following a header.</li>
      <li>This is an ordered list following a header.</li>
    </ol>
    <h6>
      <a href="#header-6" />
      Header 6
    </h6>
    <div
      css={css`
        width: 100%;
        overflow: scroll;
        td {
          white-space: nowrap;
        }
      `}
    >
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>head1</th>
            <th style={{ textAlign: 'left' }}>head two</th>
            <th style={{ textAlign: 'left' }}>three</th>
            <th style={{ textAlign: 'left' }}>four</th>
            <th style={{ textAlign: 'left' }}>five</th>
            <th style={{ textAlign: 'left' }}>six</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>ok</td>
            <td style={{ textAlign: 'left' }}>good swedish fish</td>
            <td style={{ textAlign: 'left' }}>nice</td>
            <td style={{ textAlign: 'left' }}>nice</td>
            <td style={{ textAlign: 'left' }}>nice</td>
            <td style={{ textAlign: 'left' }}>nice</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>out of stock</td>
            <td style={{ textAlign: 'left' }}>good and plenty</td>
            <td style={{ textAlign: 'left' }}>nice</td>
            <td style={{ textAlign: 'left' }}>nice</td>
            <td style={{ textAlign: 'left' }}>nice</td>
            <td style={{ textAlign: 'left' }}>nice</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>ok</td>
            <td style={{ textAlign: 'left' }}>
              good <code>oreos</code>
            </td>
            <td style={{ textAlign: 'left' }}>hmm</td>
            <td style={{ textAlign: 'left' }}>hmm</td>
            <td style={{ textAlign: 'left' }}>hmm</td>
            <td style={{ textAlign: 'left' }}>hmm</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'left' }}>ok</td>
            <td style={{ textAlign: 'left' }}>
              good <code>zoute</code> drop
            </td>
            <td style={{ textAlign: 'left' }}>yumm</td>
            <td style={{ textAlign: 'left' }}>yumm</td>
            <td style={{ textAlign: 'left' }}>yumm</td>
            <td style={{ textAlign: 'left' }}>yumm</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>There’s a horizontal rule below this.</h3>
    <hr />
    <h3>Here is an unordered list:</h3>
    <p>This is a list</p>
    <ul>
      <li>Item foo</li>
      <li>Item bar</li>
      <li>Item baz</li>
      <li>Item zip</li>
    </ul>
    <h3>And an ordered list:</h3>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item three</li>
      <li>Item four</li>
    </ol>
    <h3>And a nested list:</h3>
    <ul>
      <li>
        level 1 item
        <ul>
          <li>level 2 item</li>
          <li>
            level 2 item
            <ul>
              <li>level 3 item</li>
              <li>level 3 item</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        level 1 item
        <ul>
          <li>level 2 item</li>
          <li>level 2 item</li>
          <li>level 2 item</li>
        </ul>
      </li>
      <li>
        level 1 item
        <ul>
          <li>level 2 item</li>
          <li>level 2 item</li>
        </ul>
      </li>
      <li>level 1 item</li>
    </ul>
    <h3>Nesting an ol in ul in an ol</h3>
    <ul>
      <li>
        level 1 item (ul)
        <ol>
          <li>level 2 item (ol)</li>
          <li>
            level 2 item (ol)
            <ul>
              <li>level 3 item (ul)</li>
              <li>level 3 item (ul)</li>
            </ul>
          </li>
        </ol>
      </li>
      <li>
        level 1 item (ul)
        <ol>
          <li>level 2 item (ol)</li>
          <li>
            level 2 item (ol)
            <ul>
              <li>level 3 item (ul)</li>
              <li>level 3 item (ul)</li>
            </ul>
          </li>
          <li>level 4 item (ol)</li>
          <li>
            level 4 item (ol)
            <ul>
              <li>level 3 item (ul)</li>
              <li>level 3 item (ul)</li>
            </ul>
          </li>
        </ol>
      </li>
      <li>level 1 item (ul)</li>
    </ul>
    <h3>And a task list</h3>
    <ul>
      <li>
        <input type="checkbox" disabled="disabled" />
        Hello, this is a TODO item
      </li>
      <li>
        <input type="checkbox" disabled="disabled" />
        Hello, this is another TODO item
      </li>
      <li>
        <input type="checkbox" disabled="disabled" defaultChecked="checked" />
        Goodbye, this item is done
      </li>
    </ul>
    <h3>Small image</h3>
    <img
      src="/figma-export/markmiro-portrait-1x.jpg"
      srcSet="/figma-export/markmiro-portrait-2x.jpg 2x"
    />
    <h3>Large image</h3>
    <p>
      <img
        src="https://guides.github.com/activities/hello-world/branching.png"
        alt=""
      />
    </p>
    <h3>Definition lists can be used with HTML syntax.</h3>
    <dl>
      <dt>Name</dt>
      <dd>Godzilla</dd>
      <dt>Born</dt>
      <dd>1952</dd>
      <dt>Birthplace</dt>
      <dd>Japan</dd>
      <dt>Color</dt>
      <dd>Green</dd>
    </dl>
    <pre>
      <code>
        Long, single-line code blocks should not wrap. They should horizontally
        scroll if they are too long. This line should be long enough to
        demonstrate this.{'\n'}
      </code>
    </pre>
    <pre>
      <code>The final element.{'\n'}</code>
    </pre>
    <hr />
  </>
)

export default HtmlKitchenSink
