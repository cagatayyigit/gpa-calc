

const saveTakenCourses = (takenCourses) => {
    localStorage.setItem("taken_courses", JSON.stringify(takenCourses));
}

const getTakenCourses = () => {
    const taken_courses = localStorage.getItem("taken_courses") ;
    if (taken_courses === null || taken_courses === "") {
        return {
             "taken_courses" :[
                [
                    { "code": "BBM102", "name": "Introduction to Programming", "grade": "A1", "credit": 6 },
                    { "code": "BBM103", "name": "Introduction to Programming", "grade": "A2", "credit": 3 },
                    { "code": "BBM406", "name": "Introduction to Machine", "grade": "A3", "credit": 4 },
                    { "code": "BBM403", "name": "Introduction to Machine", "grade": "B1", "credit": 4 },
                    { "code": "BBM401", "name": "Introduction to Machine", "grade": "B2", "credit": 4 },
                ],
                [
                    { "code": "BBM102", "name": "Introduction to Machine", "grade": "B3", "credit": 3 },
                    { "code": "BBM103", "name": "Introduction to Machine", "grade": "C1", "credit": 3 },
                    { "code": "BBM4213", "name": "Introductine Learning", "grade": "C2", "credit": 4 },
                    { "code": "2123", "name": "Introductine Learning", "grade": "C3", "credit": 4 },
                    { "code": "322", "name": "Introductine Learning", "grade": "D", "credit": 4 },
                    { "code": "234", "name": "Introductine Learning", "grade": "F2", "credit": 4 },
                    { "code": "BBM423523506", "name": "Introductine Learning", "grade": "F3", "credit": 4 },
                ],
            ]
        }
    }
    
    return JSON.parse(taken_courses);
}

const removeCourse = (course) => {
    const taken_courses = getTakenCourses().taken_courses ;
    let newTakenCourses = [...taken_courses]
    newTakenCourses.forEach((t, idx) => {
        newTakenCourses[idx] = newTakenCourses[idx].filter(c => c !== course)
    })
    saveTakenCourses({"taken_courses": newTakenCourses});
}

const addCourse = (term, termIdx, course) => {
    const taken_courses = getTakenCourses().taken_courses ;
    let newTakenCourses = [...taken_courses]
    newTakenCourses[termIdx].push(course);
    saveTakenCourses({"taken_courses": newTakenCourses});
}

export const takenCoursesServices = {saveTakenCourses, getTakenCourses, removeCourse,addCourse};