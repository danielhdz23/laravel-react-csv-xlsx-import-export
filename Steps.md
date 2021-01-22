1. Create Project
   composer create-project laravel/laravel app-name --prefer-dist

2. Install dependencies
   composer require phpoffice/phpspreadsheet https://phpspreadsheet.readthedocs.io/en/latest/
   composer require maatwebsite/excel

3. Register Plugin’s Service in Providers & Aliases - config/app.php

4. Execute the vendor, publish command, and publish the config.
   php artisan vendor:publish --provider="Maatwebsite\Excel\ExcelServiceProvider"

5. Compose Database Connection
   Make the consensus between laravel app and database in .env file.

6. Generate Fake Records, Migrate Table
   php artisan migrate

7. Create fake records
   php artisan tinker
   User::factory()->count(50)->create();
   exit
8. Create Rutes routes/web.php

9. Make Import Class
   php artisan make:import UsersImport --model=User

10. Construct Export Class
    php artisan make:export UsersExport --model=User

11. Create and Prepare Controller
    php artisan make:controller UserController

12. Write Down Blade View Or create Front with React, View, etc.

php artisan serve
http://localhost:8000/file-import-export

## React

1. Install Laravel UI
   composer require laravel/ui

2. Install React in Laravel
   php artisan ui react
   npm i

3. Set Up React Component in Laravel

4. npm run watch npm run dev

5. php artisan serve
