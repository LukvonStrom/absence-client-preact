import {h, Component} from 'preact';
import AbsenceHeader from "./absence-header";
import AbsenceDetail from "./absence-detail";

export default class AbsenceTable extends Component {
    render({absences}) {
        absences = absences.map(absence => {
            return (<AbsenceDetail
                approved={absence.approved}
                date={absence.date}
                reason={absence.reason}
                registered={absence.registered}
                subject={absence.subject}
            />);
        });
        return (
            <table>
                <thead>
                <AbsenceHeader/>
                </thead>
                <tbody>
                {absences}
                </tbody>
            </table>
        )
    }
}

