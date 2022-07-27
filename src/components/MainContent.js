function MainContent() {
  return (
    <div className="Main">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <main>
        <h1>Laura Smith</h1>
        <h3>Frontend Developer</h3>
        <small>laurasmith.website</small>
        <button className="btn">
          <i className="fa fa-envelope"> Email</i>
        </button>
        <div className="about">
          <h2 className="h1">About</h2>
          <p className="p1">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h2 className="h2">Interest</h2>
          <p className="p2">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </main>
    </div>
  );
}

export { MainContent };
