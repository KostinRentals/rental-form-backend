# Rental Form Backend

This is a simple Node.js/Express backend to receive rental application data and send it to two email addresses using Gmail and Nodemailer.

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure Gmail credentials:**
   - In `index.js`, replace `YOUR_GMAIL_ADDRESS` with your Gmail address.
   - Replace `YOUR_APP_PASSWORD` with a Gmail App Password (not your regular password). [How to get one?](https://support.google.com/accounts/answer/185833)

3. **Run the server:**
   ```sh
   npm start
   ```

4. **Frontend:**
   - In your HTML/JS, set `emailServiceEndpoint` to `http://localhost:3001/submit`.

## Security Note
- Never commit real credentials to public repositories.
- For production, use environment variables and secure mail services.
