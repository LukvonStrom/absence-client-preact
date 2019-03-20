import {h, Component} from 'preact';
import AbsenceTable from "./absence-table";

export default class AbsenceOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            absences: [{
                approved: true,
                date: new Date().toLocaleDateString(),
                reason: 'Weil halt.',
                registered: 'Nö',
                subject: 'Deutsch'
            }]
        }
    }

    render({}, {absences}) {
        return (
            <main>
                <div class="flex headline">
                    <h1>Fehlzeiten&uuml;bersicht</h1>
                    <button>Neue Fehlzeit</button>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est.
                </p>
                <AbsenceTable absences={absences}/>
            </main>)
    }
}
