# queenzzoneBackend

## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone https://github.com/Priya-Hasan-It/queenzzoneBackend.git

# Go into the repository
cd queenzzoneBackend

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install
or in yarn 
yarn install

# Start a local dev server
yarn server
```
1. Create a file called .env in the root directory of your project (if not done already in section: [How To Use](#how-to-use))

Note: Configuring environment variables before deploying is highly recommended as some components depend on API data. 

```bash
- queenzzoneBackend
  - node_modules

  - .env         <-- create it here
  - .gitignore
  - yarn.lock
  - package.json
```

2. Inside the .env file, add key 

```env
// .env
PORT =8800
APPNAME = queenzzone
```
