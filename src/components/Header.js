import './Header.css';

export default function Header() {

    return (
      <div>
        <header className="header">
          <div className="text-box">
            <h1 className="heading-primary">
              <span className="heading-primairy-main">Welcome to the Farmer's Market!</span>
              <span className="headering-primary-sub">A social-distancing, shopping alternative...</span>
            </h1>
          </div>
        </header>
      </div>
    );
}