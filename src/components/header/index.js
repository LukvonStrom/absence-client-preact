import { h } from 'preact';

const Header = ({schoolTitle, short}) => (
    <header>
        <div className="flex vertical-center">
            <img src="/logo" className="logo" alt="Schullogo"/>
            <div className="name">
                <h3>{schoolTitle}</h3>
                <h2>{short}</h2>
            </div>
        </div>
    </header>
);

export default Header;
