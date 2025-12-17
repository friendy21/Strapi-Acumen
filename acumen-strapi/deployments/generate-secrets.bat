@echo off
REM =============================================================================
REM Secret Keys Generation Script for Windows
REM Generates secure random keys for Strapi v5
REM =============================================================================

echo ==================================================================
echo Strapi v5 Secret Keys Generation
echo ==================================================================
echo.

echo Generated Secrets (save these securely!):
echo -------------------------------------------------------------------
echo.

REM Generate APP_KEYS (4 keys)
FOR /L %%G IN (1,1,4) DO (
    node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_key%%G.txt
    set /p APP_KEY%%G=<temp_key%%G.txt
    del temp_key%%G.txt
)

REM Generate other secrets
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_api.txt
set /p API_TOKEN=<temp_api.txt
del temp_api.txt

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_admin.txt
set /p ADMIN_JWT=<temp_admin.txt
del temp_admin.txt

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_transfer.txt
set /p TRANSFER_TOKEN=<temp_transfer.txt
del temp_transfer.txt

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_jwt.txt
set /p JWT_SECRET=<temp_jwt.txt
del temp_jwt.txt

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_db.txt
set /p DB_PASSWORD=<temp_db.txt
del temp_db.txt

node -e "console.log(require('crypto').randomBytes(32).toString('base64'))" > temp_webhook.txt
set /p WEBHOOK_SECRET=<temp_webhook.txt
del temp_webhook.txt

echo APP_KEYS=%APP_KEY1%,%APP_KEY2%,%APP_KEY3%,%APP_KEY4%
echo API_TOKEN_SALT=%API_TOKEN%
echo ADMIN_JWT_SECRET=%ADMIN_JWT%
echo TRANSFER_TOKEN_SALT=%TRANSFER_TOKEN%
echo JWT_SECRET=%JWT_SECRET%
echo DATABASE_PASSWORD=%DB_PASSWORD:~0,32%
echo STRAPI_WEBHOOK_SECRET=%WEBHOOK_SECRET%
echo.
echo -------------------------------------------------------------------
echo Copy these values to your .env file
echo NEVER commit .env files to version control!
echo ==================================================================
pause
