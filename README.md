# THVC Provider Directory Frontend Challenge 

TELUS Health Virtual Care (THVC) is an alternative way to access primary care health services in Canada. Think of it as a “virtual walk-in clinic”, but without any wait and better follow-up care. We provide on-demand primary care to more than 2.8 million Canadians.

Recently, THVC has expanded its suite of services to include allied health — services that go beyond primary care and that we’ve launched to support our patients’ wellness goals. We now offer mental health therapy, psychology, nutrition, physiotherapy and naturopathy services. These services are accessible by appointment only. To book an appointment, patients currently need to log onto the app and start a chat with an intake coordinator. The intake coordinator then proceeds to create the booking using the appointment booking feature in our clinical platform. 

In 2020-2021, the number and types of allied health services have grown, as did the number of bookings overall. While it’s great that we can give patients access to a wider set of services, there have been some pain points for our intake coordinators and our patients:
Our intake coordinators are now spending more time doing bookings (which is an administrative task), which leaves them with less time helping our patients and providing clinical care.
Our current booking process can be confusing for our intake coordinators and difficult for them to find a provider’s availability.
Because the number of services and allied health providers has grown, intake coordinators have difficulty recommending the appropriate provider for the needs of the patient.

We are updating our apps to allow patients to browse our specialists, and book their own appointments directly. Your job is to implement a part of the booking process, the provider listing and proifiles, in our patient app to be more efficient and to support our patients’ needs and goals.

The considerations:
- Updated React version as it is outdated
- Styling framework - Tailwind + css.
- Created responsive views
- Updated API for missing property for provider's profession, eg. social worker. Also added demo picture to public folder, the picture source is from figma design file.

## Live Demo

I have project deployed on Vercel
**To get the live demo of site please visit**: https://provider-directory-takehome.vercel.app/directory

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**Updated Note: CRA is deprecated, webpack is old.**
Node.js 17+, 18+, 20+, and now 22 use OpenSSL 3, which breaks older versions of webpack used inside react-scripts (especially CRA v4/v5). More recomanded way is to upgrade from react-scripts to Vite, but in this project to quickly fix the Node version incompatiable issue, I change the script to
```json
"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build",
  "test": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts test",
  "eject": "react-scripts eject"
}
```
**Updated**
I updated my React version to avoid unnecessary complexity.

## Getting started
### Prerequisite
1. Node.js v18+

### Install dependencies and run server
```bash
npm install
npm run dev
```


