import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Mister Excel Nicaragua</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
            position: relative;
          }
          .main-container {
            min-height: 100vh; /* will cover the 100% of viewport */
            overflow: hidden;
            display: block;
            position: relative;
            padding-bottom: 100px; /* height of your footer */
          }

          .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #2b2d42;
            color: white;
            text-align: center;
          }

          body {
            font-size: 17px;
            font-family: "Courier Prime", monospace;
            background-color: #1d6f42;
          }
          .nav-link {
            color: #fff !important;
          }

          .active {
            color: #ffb900 !important;
          }

          .nav-link:hover {
            color: #ffb900 !important;
          }

          .header-text-color {
            color: #ffb900;
          }
          .nav-color {
            background-color: #264653;
            color: #fff;
          }
          .bg {
            background-color: #1d6f42;
          }
          .vertical-center {
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
          }
        `}
      </style>
      <div className="container-fluid main-container">{children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
