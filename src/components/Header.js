import './Header.css';

export default function Header() {

    return (
      <div>
        <header className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primary-main">Welcome to the Farmer's Market</span>
              <span className="heading-primary-sub">Happy Shopping!</span>
            </h1>
          </div>
        </header>
      </div>
    );
}