import * as React from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import * as Styles from './ScheduleItem.css';


type Props = {};

export default class ScheduleItem extends React.Component<Props> {
    props: Props;

    render() {
        let blah = <Draggable
            grid={[5, 5]}
            axis="y"
            bounds=".schedule"
            handle=".handle">
        </Draggable>;

        return <div style={{position: "relative", backgroundColor: "#003"}}>
                <div className="handle" style={{backgroundColor: "#336", height: "5px"}}></div>
                <ResizableBox
                    className={Styles.box}
                    height={30}
                    width={350}
                    draggableOpts={{grid: [5, 5]}}
                    axis="y">
                    {this.props.children}
                </ResizableBox>
            </div>
    }
}
