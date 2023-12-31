import axios from "axios";



export async function loginTeacher(data){
    try{

        const response = await axios.post('http://localhost:9090/teacher/login',data);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}


export async function getContest(teacherId){
    try{

        const response = await axios.get(`http://localhost:9090/teacher/get-contest-list?teacherId=${teacherId}`);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}

export async function getProblems(contestId){
    try{

        const response = await axios.get(`http://localhost:9090/teacher/get-problem-list?contestId=${contestId}`);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}


export async function getattempts(contestId){
    try{

        const response = await axios.get(`http://localhost:9090/teacher/get-attempts-list?contestId=${contestId}`);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}


export async function createContest(data){
    try{

        const response = await axios.post('http://localhost:9090/teacher/create-contest',data);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}


export async function createProblem(data){
    try{

        const response = await axios.post('http://localhost:9090/teacher/create-problem',data);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}
