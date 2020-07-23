import React, {Fragment, useState} from 'react'
import axios from "axios";
import {
  Button,
} from 'antd';

const uploadStyle = {
  fontSize: 20,
  color : 'white', 
  display: 'block',
  overflowX : 'auto',
  overflowY : 'auto',
};
let url = process.env.NODE_ENV === 'development' ? "/upload" : "/service/upload"

const FileUpload = (props) => {

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const onChange = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('ASIN', props.ASIN);
    formData.append('OrderId', props.OrderId);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    try {
      const res = await axios.post(`${url}`,formData,config)
      const { fileName, filePath } = res.data;
      setUploadedFile({fileName, filePath})
      props.handleReviewScreenShotSubmit(fileName)
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There is problem with server.")
      } else {
        console.log(err.response.data.msg)
      }
    }
  }
  return (
    <Fragment >
      <form onSubmit={onSubmit} style={uploadStyle}>
        <input type="file" name="myImage" onChange= {onChange} />
        <Button type="primary" onClick={onSubmit}>Click Here to Upload the Image</Button>
      </form>
    </Fragment>
  )
}

export default FileUpload;
