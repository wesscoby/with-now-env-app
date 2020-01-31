export default () => (
  <div className="hello">
    <p>
      Hello World! Here's a secret shared with the client using Next env:{' '}
      <strong>SECRET: {process.env.SECRET}</strong>, the secret is shared at build time,
      which means every reference to the secret is replaced with its value
    </p>
<p>ANOTHER_SECRET: {process.env.ANOTHER_SECRET}</p>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
  </div>
)
