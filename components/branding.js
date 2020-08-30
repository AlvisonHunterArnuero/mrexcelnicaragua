import Link from "next/link";
export default function Branding() {
  return (
    <React.Fragment>
      <Link href="/">
        <a className="navbar-brand nav-link text-uppercase">
          <i className="fa fa-file-excel-o mx-2" aria-hidden="true"></i> Mister Excel
          Nicaragua{" "}
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </React.Fragment>
  );
}
