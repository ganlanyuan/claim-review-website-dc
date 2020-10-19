# Project Setup
1. add environment variable `REACT_APP_remoteHost` for remote host.
2. Add all firebase related environment variables used in `remote-host.js` [where to get](https://support.google.com/firebase/answer/7015592)

# Firebase Setup
1. create a project.
2. add hosting, add custom domain.
3. add storage. Config rule as following
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow write: if request.auth != null && request.resource.size < 5 * 1024 * 1024;
      allow read;
    }
  }
}
```
4. add auth, for anomynous sign in.

# Google Cloud Storage Setup
1. select the project created in Firebase
2. go to storage, select the bucket.
3. give read permission to all users.

