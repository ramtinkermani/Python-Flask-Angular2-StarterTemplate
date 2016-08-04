Python Version: 3.4.3
PIP Version: 8.1.2
Flask Version: 0.11.1
AngularJS version: 2.0.0-rc.4


To activate the virtual environment with the name "FlaskEnv":

$ source ~/.virtualenvs/FlaskEnv/bin/activate

$ pip freez > requirements.txt

To install all the nom libraries for Angular2 project including Angular Libraries and TypeScript Compiler:
$ npm install

Note:
    The first time you run "npm isntall" you might see success but "node_modules" folder may not be created. Run the command again and you should have it created.

To install the python libraries required for the Flask Application:
$ pip install -r requirements.txt


We use Webpack to package our Angular application into a single bundled JavaScript file that will be copied into teh static/scripts folder and will be referenced from our deployed index.html

$ $(npm bin)/webpack --progress


Note)
If you are going to use Jinja2 templates, you need to be careful since the same syntax is used for Angular interpolations. For Jinja2 you can specify a different XXXXX