import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { map, range } from 'lodash';


interface Props {
    NbDays?: number;
    Month?: string;
}


export const Calendar: React.FC<Props> = (Props) => {
    return (
        <div>
            <table className="table">
                <tr><td> {Props.Month}</td></tr>
                <tr>
                    {map(range(1, Props.NbDays, 1), (elm) =>
                        <td>
                            <div>{elm}</div>
                            <div className="input-group-text">
                            
                            <input type="checkbox" aria-label="Checkbox for following text input"/>
                            </div>
                        </td>)}

                </tr>
            </table>

        </div>

    )
}