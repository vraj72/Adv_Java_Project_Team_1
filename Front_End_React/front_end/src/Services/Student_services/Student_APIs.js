import axios from "axios";

export async function registerStudent(data) {
    try {
      const response = await axios.post('http://localhost:9090/student/register', data);
      return response;
    } catch (error) {
      console.log(error);
      return error;
    }
  }


export async function getStudentContest(){
    try{

        const response = await axios.get("http://localhost:9090/student/dashboard");
        return response;
    }catch(error){
        console.log(error)
        return error;
    }
}
export async function loginStudent(data){
    try{

        const response = await axios.post('http://localhost:9090/student/login',data);

        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}

export async function getProblems(contestId){
  try{

      const response = await axios.get(`http://localhost:9090/contest/${contestId}/problems`);
      return response;

  }catch(error){
      console.log(error)
      return error;
  }

} 


export async function getProblemsWithAttempts(contestId, studentId){
    try{

        const response = await axios.get(`http://localhost:9090/student/get-problem-list-with-attempts?contestId=${contestId}&studentId=${studentId}`);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}

export async function getattemptProblem(problem_id){
    try{
  
        const response = await axios.get(`http://localhost:9090/problem/${problem_id}`);
        return response;
  
    }catch(error){
        console.log(error)
        return error;
    }
  

  }



export async function attemptProblem2(data){
    try{

        const response = await axios.post('http://localhost:9090/student/attempt-problem',data);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}

 
  export const getLeaderboardData = async (contestId) => {
    try {
      const response = await axios.get(`http://localhost:9090/contest/${contestId}/leaderboard`);
      return response.data;
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      throw error;
    }
  };


