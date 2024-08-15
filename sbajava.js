// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150,
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500,
      },
    ],
  };
  
  // The provided learner submission data.
  //125
  //assignment 1 with score 47
  //assignment 2 with score 150
  //assignment 3 with score 150
  //
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47,
      },
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150,
      },
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400,
      },
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39,
      },
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140,
      },
    },
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
    //1. i want to create an array that unique students ids
    //2. from there create an object for id
    //3. add the assignments to the object where id is key and then value is the grade
    //4.
    //
    let assignment3 = [400, 0]
    let assignment2 = [150, (140-15)]
    let assignment1 = [47, 39]
    let average1 = [(47) / (50), (39) / (50)]
    let average2 = [(150) / (150), (140-15) / (150)]
    let average3 = [400 / (500), 0]
    let uniqueStudents = [];
    LearnerSubmissions.forEach((item) => {
  
      if(uniqueStudents.includes(item.learner_id)){
      
      }else{
        
      uniqueStudents.push(item.learner_id)
      }
  
    });
   uniqueStudents=  uniqueStudents.map((item,index)=>{
      console.log(item)
      let uniqueId={
        id:item,
        assignment1:assignment1[index],
        average1:average1[index],
        assignment2:assignment2[index],
        average2:average2[index],
        assignment3:assignment3[index],
        average3:average3[index]
       
      }
     return uniqueId
    })
     console.log(uniqueStudents)
  
    //     id: 125,
    //     1:47
    //     2:150
    //   },
  
       // next step is to devide by points possible
      //calulcate average
       // then take out the due assignments
    // return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // console.log(result);
  
  
  
