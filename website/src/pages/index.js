import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gitfork from "../components/githubFork"
import Faq from "react-faq-component"
import Prism from "prismjs"
import Header from "../components/header"
import Footer from "../components/footer"
import { Fragment } from "react"

const dataJSON = {
  title: "FAQ title",
  rows: [
    {
      title: "Question 1",
      content: "Answer 1",
    },
    {
      title: "Question 2",
      content: "Answer 2",
    },
  ],
}

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Can I use html as content",
      content: `Yes, here is an example of a <a href="https://binodswain.github.io/react-faq-component/">link</a>`,
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
}

const config = {
  animate: true,
  // arrowIcon: "V",
}

const htmlcode = `import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
      </div>
    )
  }
}
`

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey'
}

const IndexPage = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <SEO title="react-faq-component" />
      <Header />
      <Layout>
        <Gitfork />
        <section className="badges">
          <a href="https://www.npmjs.com/package/react-faq-component">
            <img
              src="https://badgen.net/npm/v/react-faq-component"
              alt="release"
            />
          </a>
          <a href="https://github.com/binodswain/react-faq-component/issues">
            <img
              src="https://badgen.net/github/open-issues/binodswain/react-faq-component"
              alt="open-issues"
            />
          </a>
          <a href="https://github.com/binodswain/react-faq-component/blob/master/LICENSE">
            <img
              src="https://badgen.net/github/license/binodswain/react-faq-component"
              alt="license"
            />
          </a>
        </section>

        <section className="demo">
          <h2>Demo</h2>
          <Faq data={data} styles={styles} config={config} />
          <Link to={"/demo-more"}>More demo</Link>
        </section>

        <section className="usage">
          <h3>Usage</h3>
          <div>Install the package.</div>
          <pre>
            <code className="language-markup">
              npm install --save react-faq-component
            </code>
          </pre>
          <div>Import the package.</div>
          <pre>
            <code className="language-jsx">
              import Faq from 'react-faq-component';
            </code>
          </pre>
          <br />
          <div>example: </div>
          <br />
          <pre className="line-numbers">
            <code className="language-jsx">{htmlcode}</code>
          </pre>
        </section>
        <section className="dataformat">
          <h3>Data format</h3>
          <p>
            The data passed into <strong>react-faq-component</strong> is an
            object having two keys i.e <strong>title</strong> (String) and{" "}
            <strong>rows</strong> (array of objects).
          </p>
          <pre className="line-numbers">
            <code className="language-json">
              {JSON.stringify(dataJSON, null, 4)}
            </code>
          </pre>
        </section>
      </Layout>
      <Footer       />
    </Fragment>
  )
}

export default IndexPage
