import {Component} from "react";
import DetailedView from './DetailedView';


export class PhotoNode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailVisible: false,
            data: new Date().toLocaleDateString('en-US')
        }
    }

    render() {
        return (
            <div className='PhotoNode'>
                <img className='image' src={this.props.url} alt='Not Available'/>
                <div className='textRegion'>
                    <b className='photoTitle'>{this.props.title}</b>
                    <p className='photoDescription'>{this.props.description}</p>
                </div>

                <button type='button' className='viewDetail' onClick={this.handlePopup.bind(this)}>Detail</button>
                <button type='button' className='removePhoto' onClick={this.props.removePhoto}>Remove</button>

                {this.state.detailVisible &&
                    <DetailedView
                        title={this.props.title}
                        url={this.props.url}
                        description={this.props.description}
                        date={this.state.data}
                        closePopup={this.handlePopup.bind(this)}
                    />
                }
            </div>
        );
    }

    handlePopup() {
        this.setState(
            {detailVisible: !this.state.detailVisible}
        )
    }
}


export default PhotoNode;