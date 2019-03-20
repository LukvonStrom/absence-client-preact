import {h, Component} from 'preact';

export default class AsideComponent extends Component {

    logout = () => {

        console.log('Logging Out...')

    };

    constructor(props) {
        super(props);
        this.state = {
            name: "Lukas Fruntke",
            grade: "J2",
        }

    }

    render({}, {name, grade}) {

        return (
            <aside>
                <small>Angemeldet als</small>
                <big>
                    <span class="name">{name}</span>,&nbsp;
                    <span class="class">{grade}</span>
                </big>
                <button onClick={this.logout}>Abmelden</button>
            </aside>
        );

    }

}
