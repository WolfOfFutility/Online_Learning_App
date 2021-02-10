const express = require("express")
var fs = require("fs");

var courses = []
var users = []

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

const read = () => {
    courses = []
    users = []

    fs.readFile("./src/Middleware/data.json", (err, data) => {
        if(err) throw err;
        for(var i in JSON.parse(data)) {
            courses.push(JSON.parse(data)[i])
        }
    })

    fs.readFile("./src/Middleware/users.json", (err, data) => {
        if(err) throw err;
        for(var i in JSON.parse(data)) {
            users.push(JSON.parse(data)[i])
        }
    })
}

read();

const saveAllCourses = () => {
    fs.writeFile("./src/Middleware/data.json", JSON.stringify(courses), (err) => {
        if(err) throw err;
        console.log("Course Data was saved!")
    })
}

const saveAllUsers = () => {
    fs.writeFile("./src/Middleware/users.json", JSON.stringify(users), (err) => {
        if(err) throw err;
        console.log("User Data was saved!")
    })
}

const saveNewCourse = (json) => {
    var currentData = courses
    currentData.push(json);

    fs.writeFile("./src/Middleware/data.json", JSON.stringify(currentData), (err) => {
        if(err) throw err;
        console.log("Course Data was saved!")
    })
}

const saveNewUser = (json) => {
    var currentUserData = users
    currentUserData.push(json)

    fs.writeFile("./src/Middleware/users.json", JSON.stringify(currentUserData), (err) => {
        if(err) throw err;
        console.log("User Data was saved!")
    })
}

// ******* Users *******

    // Login as a user (Insert username and password)
    app.get("/api/user/login", (req, res) => {
        var username = req.query.username
        var password = req.query.password

        var foundUser = users.filter(user => user.Username === username && user.Password === password)[0]
        if(foundUser === []) {
            res.send("No user found.")
        }
        else{
            res.send(foundUser)
        }
    
    })

    // Create a new user (Insert username, password, display, role)
    app.get("/api/create/user", (req, res) => {
        var newUsername = req.query.username
        var newPassword = req.query.password
        var newDisplay = req.query.display
        var newRole = req.query.role
        
        saveNewUser(
            {
                "UserID": users.length + 1,
                "Username": newUsername,
                "Password": newPassword,
                "DisplayName": newDisplay,
                "Role": newRole,
                "OwnedCourses": []
            }
        )

        res.send("User Creation Successful!")
    })

    // Update user details (insert id, username, password, display, role)
    app.get("/api/update/user", (req, res) => {
        var userID = req.query.id
        var username = req.query.username
        var password = req.query.password
        var display = req.query.display
        var role = req.query.role

        var selectedUser = users.filter(user => user.UserID === userID)[0]

        if(username !== undefined) {
            selectedUser.Username = username
        }

        if(password !== undefined) {
            selectedUser.Password = password
        }

        if(display !== undefined) {
            selectedUser.DisplayName = display
        }

        if(role !== undefined) {
            selectedUser.Role = role
        }

        saveAllUsers()

        res.send("User update successful!")
    })

    // Add owned courses to user (Insert userID, array of CourseIDs)
    app.get("/api/user/addCourses", (req, res) => {
        var userID = req.query.id
        var queryCourses = req.query.courses

        queryCourses = queryCourses.replace("[", "").split(",")
        var coursesArray = []

        for(var i in queryCourses) {
            coursesArray.push(parseInt(queryCourses[i]))
        }

        var selectedUser = users.filter(user => user.UserID === parseInt(userID))[0]
        selectedUser.OwnedCourses = coursesArray

        saveAllUsers()

        res.send("Successful Addition of Courses!")
    })


// ******* Courses *******

    // Get All Courses
    app.get("/api/courses", (req, res) => {
        res.send(courses)
    })

    // Search Courses (Insert a query substring)
    app.get("/api/search/courses", (req, res) => {
        var query = req.query.query

        var results = courses.filter(course => course.CourseName.toLowerCase().includes(query.toLowerCase()))

        res.send(results)
    })

    // Create a New Course (Insert Course Name)
    app.get("/api/create/course", (req, res) => {
        var newCourseName = req.query.name

        var newCourse = {
            "CourseID": courses.length + 1,
            "CourseName": newCourseName,
            "Image": "",
            "Description": "",
            "Progress": 0,
            "Classes": []
        }

        saveNewCourse(newCourse)

        res.send("Course Saved Successfully!")
    })

    // Update a course (Insert an ID) (CAN insert name, img, desc, progress)
    app.get("/api/update/course", (req, res) => {
        var courseID = req.query.id
        var newCourseName = req.query.name
        var newCourseImage = req.query.img
        var newCourseDesc = req.query.desc
        var newCourseProgress = req.query.progress

        var singleCourse = courses.filter(course => course.CourseID === parseInt(courseID))[0]

        if(newCourseName !== undefined) {
            singleCourse.CourseName = newCourseName
        }
        
        if(newCourseImage !== undefined) {
            singleCourse.Image = newCourseImage
        }

        if(newCourseDesc !== undefined) {
            singleCourse.Description = newCourseDesc
        }
        
        if(newCourseProgress !== undefined) {
            singleCourse.Progress = newCourseProgress
        }
        
        saveAllCourses()

        res.send("Update Was Successful!")
    })

    // Get All Owned Courses (Insert User username)
    app.get("/api/courses/owned", (req, res) => {
        var username = req.query.username
        var user = users.filter(user => user.Username === username)[0]

        var ownedCourses = []

        for(var i in user.OwnedCourses) {
            for(var j in courses) {
                if(user.OwnedCourses[i] === courses[j].CourseID) {
                    ownedCourses.push(courses[j])
                }
            }
        }

        res.send(ownedCourses)
    })

    // Get details for specific course (Insert CourseID)
    app.get("/api/courses/data", (req, res) => {
        var courseID = req.query.id
        var results = courses.filter(course => course.CourseID === parseInt(courseID));
        res.send(results[0])
    })

    // Add a class to a course (Insert CourseID, classType, className)
    app.get("/api/courses/addClass", (req, res) => {
        var courseID = req.query.id
        var classType = req.query.type
        var className = req.query.name

        var selectedCourse = courses.filter(course => course.CourseID === parseInt(courseID))[0]
        selectedCourse.Classes.push({"ClassType": classType, "ClassName": className})

        saveAllCourses()

        res.send("Course Update Successful!")
    })

app.listen(3001, () => {
    console.log("Application middleware is running.")
})