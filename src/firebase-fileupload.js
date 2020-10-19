import * as firebase from "firebase/app";
import './firebase-config';
import "firebase/auth";
import 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const HOST = "https://storage.cloud.google.com";

class FirebaseFileUploader {

  static signInAnonymously() {
    return firebase.auth().signInAnonymously();
  }
  
  static upload(file) {
    const storageRef = firebase.storage().ref();
    const randPrefix = uuidv4();
    const name = `${randPrefix}-${file.name}`;
    const ref = storageRef.child(`claim-review/${name}`);
    return this.signInAnonymously().then(() => {
      return ref.put(file)
    }).then(snapshot => {
      const uid = -Math.random() * 10000;
      const {bucket, fullPath} = snapshot.metadata;
      const url = `${HOST}/${bucket}/${fullPath}`;
      const response = {
        url,
        fileName: name
      };
      return response;
    });
  }
}

export default FirebaseFileUploader;