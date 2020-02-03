					Evolent Health - Project exercise for Application Development Positions 

------------------------------------------------------------------------------------------------------------------

Project Description:  Design and implement a production ready application for maintaining contact information.
					  Please choose the frameworks, packages and/or technologies that best suit the requirements. 

Application basically consists of 2 folders-> dist and src

Under src folder, we have 'js' folder containing models and views along with index.js,base.js and index.html files.
'index.js' acts as a controller and manages all the models and views
'index.html' contains the HTML webpage code.

Installed node.js on my PC. NPM Packages used: Babel -->for ES6 to ES5 conversion  
											   WebPack --> for bundling the modules 

Under dist folder, we have 'js' folder containing 'bundle.js' file where all the js files are bundled into a single file.
				   It also contains 'index.html' which contains HTML code.
				   

Moreover, we have '.babelrc' --> babel config file
				  'package-lock.json','package.json' file that contains the dependencies to be installed.
				  'webpack.config.js' file -> webpack config file.
				  
To run the aplication -->
1. Install Node.js on the machine.
2. Install all the dependencies that are given in 'package.json' file
3. To run the webpack-dev-server --> Run command -> npm run start
		This will make your machine a local server
4. Run http://localhost:8080/ on your web browser, once the server is running.

	OR
	
You can simply run index.html file from dist folder.
