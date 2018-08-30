# Teachable frontend takehome

This is scaffolding for a [Ruby Gems](https://rubygems.org/) search application. This application, once completed, should meet the following criteria:

1. It have a search box that lets users search for Ruby Gems.
2. It should display the results of each network request in a list.
3. Each Gem should have a button that lets users "save" and "unsave" Gems.
4. It should have a way to view saved Gems, even after the browser window is refreshed (localStorage is a fine for this).

## Getting started

### Step 1: Install dependencies

We have a few dependencies necessary to run the build and proxy server, the rest are up to you.

```bash
npm install
```

### Step 1: Start the development server

```bash
npm start
```

### Step 3: Start coding

We want to judge your ability to program UIs, not configure build tools. That's why we chose [Parcel](https://parceljs.org/) as a bundler, please consult the [documentation](https://parceljs.org/getting_started.html) if you run into any trouble.

### Step 4: Network requests

You may have noticed the proxy.js file at the root of this application, that's there to solve cross-origin issues when making network requests. The server automatically starts up when running "npm run dev" or "npm run start".

To see a sample request in action, run the following in your command line.

```bash
curl http://localhost:3000/api/v1/search.json?query=rails
```
