Currency Converter — Full Stack (React + Node + MySQL)

This is a simple currency converter demo project with:
- React frontend (client/)
- Node + Express backend (server/)
- MySQL database (server/database.sql)

Quick start

1) Ensure MySQL is installed and running. Create the database:
   - Open MySQL Workbench and run `server/database.sql` (File → Run SQL Script)
   - Or run from command line (adjust mysql.exe path if necessary):

```
"C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\mysql.exe" -u root -p < "C:\\Users\\P KARUNAKARAN\\Downloads\\FSD PROJECT\\server\\database.sql"
```

2) Configure DB credentials in `server/.env`:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_ROOT_PASSWORD
DB_NAME=currency_converter
```

3) Start backend:

```
cd server
npm install
npm start
```

4) Start frontend:

```
cd client
npm install
npm start
```

Open the UI at http://localhost:3000
The backend API is at http://localhost:5000/api/rates

Notes
- `.env` is ignored by git (see `.gitignore`). Do not commit secrets to GitHub.
- To push to GitHub: initialize a repo, add a remote, and push (instructions below).

Push to GitHub (example)

```
cd "C:\\Users\\P KARUNAKARAN\\Downloads\\FSD PROJECT"
git init
git add .
git commit -m "Initial commit - currency converter"
# Create a new empty repo on GitHub, then add the remote and push:
# git remote add origin https://github.com/<your-username>/<repo-name>.git
# git branch -M main
# git push -u origin main
```

If you want, I can initialize the local git repo and make the first commit for you. I cannot create/push to a GitHub repo without your credentials or a remote URL; you can either create the GitHub repo yourself and paste the remote URL here, or I can show exact commands for the GitHub web or gh CLI.
