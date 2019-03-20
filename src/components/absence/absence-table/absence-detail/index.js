import {h} from 'preact';

const AbsenceDetail = ({date, subject, registered, approved, reason}) => (
    <tr>
        <td class="date">{date}</td>
        <td class="subject">{subject}</td>
        <td class="registered">{registered}</td>
        <td class="approved">{approved ? 'ja' : 'nein'}</td>
        <td class="reason">{reason}</td>
    </tr>
);

export default AbsenceDetail;

