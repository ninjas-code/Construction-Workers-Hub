# Construction-Workers-Hub
Green Field Project

#Construction Workers Hub UI Documentation 

In some countries, there are many construction workers who are waiting under the hot blazing sun in a known place where a civil engineer comes by to choose some construction workers to work under him. 

In this Application we built called Construction Workers Hub solves this real world problem where the construction worker doesn’t have to wait in a specific place waiting for a potential job, nor does the engineer have to go to a specific place to choose the construction worker he needs. 

When you first open the Construction Workers Hub application you’ll see two buttons, one with a picture of a construction worker which takes you to the sign up page for the construction workers, after you sign up you’ll be directed to the sign in page then to your profile as a construction worker. The other button has a picture of an engineer which will take you to the engineer sign up page, after you sign up and sign in successfully, you’ll be directed to your profile as an engineer where you can click on one of the buttons to view all the construction workers by category, ex: stone builders button will take you to all the stone builder workers, which also applies to all the categories available. Once you click on one of the worker categories and then click on go to profile you’ll be directed to that worker’s profile you’ve chosen, there you can book that worker provided an end date and you can also message him from the application itself if you need to.

#Construction Workers Hub application files Documentation

client folder: contains an app.jsx file, another folder named components which contains all the                     components for the application and folder named firebase with an index.js file for                   the api connection with firebase for the profile photo.

database folder: contains the db.js file for the database coonnection with seqelize and the                           models.js file for the schemas for the engineer, worker and order tables

public folder: contains the folders and files whic all workes together with client folder                           (bundle.js for the webpack)

outside files: package.json contains all the dependencies installed to make the application run. The                server.js file for all the backend functionality and controllers for the database                    tables all using Node.js Express framework.