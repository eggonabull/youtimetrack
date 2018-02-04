import * as React from 'react';
import * as styles from './HeaderButton.css';

type Props = {
	onClick: () => void
}

export default class HeaderButton extends React.Component<Props> {
	render() {
		return <div className={styles.headerButton} onClick={this.props.onClick}>
			{this.props.children}
		</div>;
	}
}