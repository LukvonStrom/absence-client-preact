import {h} from 'preact';
import style from '../style';

const AbsenceHeader = () => (
    <tr>
        <th class={style.width80}>Datum</th>
        <th class={style.width80}>Fach</th>
        <th class={style.width80}>eingetragen am</th>
        <th class={style.approved}>bestätigt</th>
        <th class={style.reason}>Grund</th>
    </tr>
);

export default AbsenceHeader;
