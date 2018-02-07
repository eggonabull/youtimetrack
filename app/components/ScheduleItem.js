import * as React from 'react';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import * as Styles from './ScheduleItem.css';


type Props = {
    onResize: () => void,
    duration: number
};

export default class ScheduleItem extends React.Component<Props> {
    props: Props;

    constructor(props) {
        super(props);
    }

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
                    height={this.props.duration}
                    width={300}
                    draggableOpts={{grid: [5, 5]}}
                    axis="y"
                    onResize={this.props.onResize}>
                    {this.props.children}
                </ResizableBox>
            </div>
    }
}
