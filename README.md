# Firebase Setup
1. create a project, add an app.
2. add hosting, add custom domain(you can add custom domain later).
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
4. add auth, for anomynous sign in. *it allows anonymous user upload files to firebase, and only allow them upload through this website*

# Google Cloud Storage Setup
1. select the project created in Firebase
2. go to storage, select the bucket.
3. give read permission to all users.

# Project Setup
1. get template `git clone git@github.com:SFPL-IT/claim-review-website-template.git claim-review-website-[subdomain]`
2. create a github repo for this project named as `claim-review-website-[subdomain]`
3. change remote url of your local repo from `template` to your newly created github repo. eg `git remote set-url origin [new github url]`
4. change `.env-example` to `.env`.
5. add environment variable `REACT_APP_remoteHost` for remote host. eg. https://[subdomain].sellerprogitpro.com.
6. Add all firebase related environment variables to `.env` file [where to get](https://support.google.com/firebase/answer/7015592)  **Project Overview Gear** -> **project settings** -> **General** -> **your app** -> **Firebase SDK snippet** -> **config**
7. install firebase tools `npm install -g firebase-tools`
8. init firebase `firebase init`, note that project root is `build` directory
9. build project `npm run build`
10. deploy `firebase deploy`

