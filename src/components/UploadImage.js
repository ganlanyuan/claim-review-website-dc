import React, {Component} from 'react';
import { Upload, Button, Icon } from 'antd';
import FirebaseFileUploader from  '../firebase-fileupload';

const url = process.env.NODE_ENV === 'development' ? "/upload" : "/service/upload"
var fileNumber = 0
class UploadImage extends React.Component {
  state = {
    fileList: [],
  };

  handleChange = info => {
    let fileList = [...info.fileList];
    console.log(info);
    // 1. Read from response and show file
    let fileNameList = []

    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
        fileNameList.push(file.response.url)
      }
      return file;
    });
    if (fileNameList.length > fileNumber) {
      fileNumber = fileNameList.length
      this.props.handleReviewScreenShotSubmit(fileNameList)
    } else if (fileNameList.length < fileNumber) {
      fileNumber = fileNameList.length
    }
    this.setState({ fileList });
  };

  

  render() {
    const customRequest = ({onSuccess, file}) => {
      FirebaseFileUploader.upload(file).then((uploadedFile) => {
        console.log(uploadedFile);
        onSuccess(uploadedFile);
      })
    };

    const uploadProps = {
      onChange: this.handleChange,
      customRequest: customRequest
    };

    
    return (
      <Upload {...uploadProps} fileList={this.state.fileList}>
        <Button>
          <Icon type="upload" /> Upload your review screenshot
        </Button>
      </Upload>
    );
  }
}
export default  UploadImage;
